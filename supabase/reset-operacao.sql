-- LIMPEZA INICIAL DA OPERACAO
-- Execute somente quando quiser apagar o historico e recomecar.
-- Mantem products, product_sizes, categories e usuarios.

begin;

-- Remove o historico operacional na ordem das referencias.
delete from public.sale_items;
delete from public.sales;
delete from public.stock_movements;

-- Zera estoque e precos para o inicio da operacao.
update public.product_sizes
set stock = 0;

update public.products
set cost = 0,
    price = 0;

commit;

-- Conferencias opcionais:
-- select count(*) as vendas_restantes from public.sales;
-- select count(*) as itens_restantes from public.sale_items;
-- select count(*) as movimentacoes_restantes from public.stock_movements;
-- select sum(stock) as estoque_total from public.product_sizes;
