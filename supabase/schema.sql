-- FLOS Pijamas: schema inicial para Supabase
create extension if not exists "pgcrypto";

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(), name text not null unique
);
create table if not exists public.products (
  id bigint primary key, name text not null, description text, image text, link text,
  category_id uuid references public.categories(id), cost numeric(12,2) not null default 0,
  price numeric(12,2) not null default 0, active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.product_sizes (
  id uuid primary key default gen_random_uuid(), product_id bigint not null references public.products(id) on delete cascade,
  size text not null, stock integer not null default 0 check (stock >= 0), unique(product_id, size)
);
create table if not exists public.sales (
  id uuid primary key default gen_random_uuid(), number bigint generated always as identity,
  sold_at timestamptz not null default now(), payment_method text not null,
  discount numeric(12,2) not null default 0, total numeric(12,2) not null default 0,
  status text not null default 'CONCLUIDA' check(status in ('CONCLUIDA','CANCELADA')),
  note text, user_id uuid references auth.users(id)
);
create table if not exists public.sale_items (
  id uuid primary key default gen_random_uuid(), sale_id uuid not null references public.sales(id),
  product_id bigint not null references public.products(id), size text not null, quantity integer not null check(quantity > 0),
  unit_price numeric(12,2) not null, unit_cost numeric(12,2) not null, total numeric(12,2) generated always as (quantity * unit_price) stored
);
create table if not exists public.stock_movements (
  id uuid primary key default gen_random_uuid(), product_id bigint not null references public.products(id),
  size text not null, movement_type text not null check(movement_type in ('ENTRADA','SAIDA')),
  quantity integer not null check(quantity > 0), note text, user_id uuid references auth.users(id), created_at timestamptz not null default now()
);

alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_sizes enable row level security;
alter table public.sales enable row level security;
alter table public.sale_items enable row level security;
alter table public.stock_movements enable row level security;

do $$ declare table_name text; begin foreach table_name in array array['categories','products','product_sizes','sales','sale_items','stock_movements'] loop execute format('drop policy if exists "authenticated full access" on public.%I', table_name); execute format('create policy "authenticated full access" on public.%I for all to authenticated using (true) with check (true)', table_name); end loop; end $$;

-- Operacoes de venda/cancelamento devem ser transacoes no backend ou em funcoes RPC:
-- validar estoque >= quantidade, inserir sale/sale_items, atualizar product_sizes e inserir movement.

create or replace function public.register_stock_entry(
  p_product_id bigint, p_size text, p_quantity integer, p_cost numeric, p_note text default null
) returns jsonb language plpgsql security definer set search_path = public as $$
declare current_stock integer; result jsonb;
begin
  if auth.uid() is null then raise exception 'Nao autenticado'; end if;
  if p_quantity <= 0 then raise exception 'Quantidade deve ser maior que zero'; end if;
  select stock into current_stock from public.product_sizes where product_id = p_product_id and size = p_size for update;
  if not found then raise exception 'Produto/tamanho nao encontrado'; end if;
  update public.product_sizes set stock = current_stock + p_quantity where product_id = p_product_id and size = p_size;
  update public.products set cost = p_cost where id = p_product_id;
  insert into public.stock_movements(product_id,size,movement_type,quantity,note,user_id)
    values(p_product_id,p_size,'ENTRADA',p_quantity,p_note,auth.uid());
  select jsonb_build_object('stock',current_stock + p_quantity) into result;
  return result;
end; $$;

create or replace function public.register_sale(
  p_payment_method text, p_discount numeric, p_note text, p_items jsonb
) returns jsonb language plpgsql security definer set search_path = public as $$
declare sale_id uuid; sale_number bigint; item jsonb; available integer; product_cost numeric; sale_total numeric := 0;
begin
  if auth.uid() is null then raise exception 'Nao autenticado'; end if;
  insert into public.sales(payment_method,discount,note,user_id) values(p_payment_method,coalesce(p_discount,0),p_note,auth.uid()) returning id,number into sale_id,sale_number;
  for item in select * from jsonb_array_elements(p_items) loop
    select p.cost into product_cost from public.products p where p.id=(item->>'product_id')::bigint;
    update public.product_sizes set stock=stock-(item->>'quantity')::integer
      where product_id=(item->>'product_id')::bigint and size=item->>'size' and stock >= (item->>'quantity')::integer
      returning stock into available;
    if not found then raise exception 'Estoque insuficiente para % / %',item->>'product_id',item->>'size'; end if;
    insert into public.sale_items(sale_id,product_id,size,quantity,unit_price,unit_cost)
      values(sale_id,(item->>'product_id')::bigint,item->>'size',(item->>'quantity')::integer,(item->>'unit_price')::numeric,product_cost);
    insert into public.stock_movements(product_id,size,movement_type,quantity,note,user_id)
      values((item->>'product_id')::bigint,item->>'size','SAIDA',(item->>'quantity')::integer,'Venda #'||sale_number,auth.uid());
    sale_total := sale_total + ((item->>'quantity')::numeric * (item->>'unit_price')::numeric);
  end loop;
  update public.sales set total = greatest(0,sale_total-coalesce(p_discount,0)) where id=sale_id;
  return jsonb_build_object('id',sale_id,'number',sale_number,'total',greatest(0,sale_total-coalesce(p_discount,0)));
end; $$;

create or replace function public.cancel_sale(p_sale_id uuid) returns jsonb language plpgsql security definer set search_path = public as $$
declare sale_row public.sales%rowtype; item record;
begin
  if auth.uid() is null then raise exception 'Nao autenticado'; end if;
  select * into sale_row from public.sales where id=p_sale_id for update;
  if not found then raise exception 'Venda nao encontrada'; end if;
  if sale_row.status='CANCELADA' then return jsonb_build_object('status','CANCELADA'); end if;
  for item in select * from public.sale_items where sale_id=p_sale_id loop
    perform 1 from public.product_sizes where product_id=item.product_id and size=item.size for update;
    update public.product_sizes set stock=stock+item.quantity where product_id=item.product_id and size=item.size;
    insert into public.stock_movements(product_id,size,movement_type,quantity,note,user_id)
      values(item.product_id,item.size,'ENTRADA',item.quantity,'Cancelamento #'||sale_row.number,auth.uid());
  end loop;
  update public.sales set status='CANCELADA' where id=p_sale_id;
  return jsonb_build_object('status','CANCELADA');
end; $$;

grant execute on function public.register_stock_entry(bigint,text,integer,numeric,text) to authenticated;
grant execute on function public.register_sale(text,numeric,text,jsonb) to authenticated;
grant execute on function public.cancel_sale(uuid) to authenticated;
