// Trying to be a Maker — statistiche anonime con GoatCounter (niente cookie, niente dati personali).
// Si accende scrivendo il codice dell'account in brand/links.js (goatcounter: "inkmakerlab"): finche' e' vuoto non parte nulla.
// Conta: le visite di ogni pagina; gli eventi "download/..." (wallpaper), "install/..." (firmware), "link/..." (pagina dei link).
// I numeri si scaricano sul Mac con 07_STATISTICHE/aggiorna.py.
(function () {
  var code = (window.CI_LINKS || {}).goatcounter;
  var queue = [];
  function send(path, title) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: path, title: title || path, event: true });
    } else {
      queue.push([path, title]);
    }
  }
  window.imCount = code ? send : function () {};
  if (!code) return;

  // Una riga per pagina: senza i filtri nell'indirizzo (?device=...&lang=...).
  window.goatcounter = { path: function () { return location.pathname; } };
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.dataset.goatcounter = "https://" + code + ".goatcounter.com/count";
  s.onload = function () { queue.splice(0).forEach(function (q) { send(q[0], q[1]); }); };
  document.head.appendChild(s);

  // Qualsiasi elemento con data-count="percorso" viene contato quando lo si clicca.
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-count]");
    if (el) send(el.getAttribute("data-count"), el.getAttribute("data-count-title"));
    // Pulsante di installazione del firmware (pagina flash): conta l'edizione e la lingua scelte.
    var inst = e.target.closest && e.target.closest("esp-web-install-button");
    if (inst) send("install/" + (inst.getAttribute("manifest") || "").replace(/^manifest-|\.json$/g, ""), "Install");
  }, true);
})();
