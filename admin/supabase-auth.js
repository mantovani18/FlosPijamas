/* Autenticacao do painel administrativo via Supabase Auth. */
(async function protectAdminPanel() {
  const client = window.supabaseClient;
  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const topbar = document.querySelector(".topbar");

  if (!client) {
    app.innerHTML = '<div class="auth-panel"><h2>Supabase nao configurado</h2><p>Confira admin/supabase-config.js.</p></div>';
    return;
  }

  const { data } = await client.auth.getSession();
  if (data.session) {
    setTimeout(() => window.dispatchEvent(new Event("flos-auth-ready")), 0);
    return;
  }

  sidebar.hidden = true;
  topbar.hidden = true;
  app.innerHTML = `<section class="auth-panel"><div class="auth-mark">F</div><p class="eyebrow">FLOS PIJAMAS</p><h2>Acesso administrativo</h2><p>Entre com o usuario criado no Supabase para acessar seu painel.</p><form id="loginForm"><label>E-mail<input type="email" name="email" required autocomplete="email"></label><label>Senha<input type="password" name="password" required autocomplete="current-password"></label><button class="btn btn-primary">Entrar no painel</button><div class="auth-error" id="authError" role="alert"></div></form></section>`;

  document.getElementById("loginForm").addEventListener("submit", async event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const button = event.currentTarget.querySelector("button");
    const error = document.getElementById("authError");
    button.disabled = true;
    error.textContent = "Entrando...";
    const result = await client.auth.signInWithPassword({ email: form.get("email"), password: form.get("password") });
    if (result.error) {
      error.textContent = result.error.message === "Invalid login credentials" ? "E-mail ou senha incorretos." : result.error.message;
      button.disabled = false;
      return;
    }
    window.location.reload();
  });
})();
