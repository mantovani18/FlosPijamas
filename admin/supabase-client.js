/* Cliente centralizado do Supabase para o painel administrativo. */
(function initializeSupabaseClient() {
  const config = window.FLOS_SUPABASE_CONFIG;

  if (!config?.url || !config?.anonKey || config.url.includes("COLE_AQUI")) {
    console.warn("Supabase ainda nao foi configurado.");
    return;
  }

  if (!window.supabase?.createClient) {
    console.error("SDK do Supabase nao foi carregado.");
    return;
  }

  window.supabaseClient = window.supabase.createClient(config.url, config.anonKey);
})();
