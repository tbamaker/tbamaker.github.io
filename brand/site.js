// Trying to be a Maker — parti comuni alle pagine del sito: collegamenti, pulsante "sostienimi", elenco delle edizioni.
(function () {
  var L = window.CI_LINKS || {};
  // Collegamenti esterni: se l'indirizzo manca il pulsante resta nascosto.
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var u = L[a.dataset.link];
    if (u) { a.href = u; a.hidden = false; a.target = "_blank"; a.rel = "noopener"; }
  });
  // "Sostienimi": c'e' sempre. Con l'indirizzo apre la pagina delle donazioni, senza porta alla sezione Support.
  var home = document.body.dataset.home || "";
  document.querySelectorAll("[data-support]").forEach(function (a) {
    if (L.donate) { a.href = L.donate; a.target = "_blank"; a.rel = "noopener"; }
    else { a.href = home + "#support"; }
  });
  var note = document.querySelector("[data-support-note]");
  if (note) note.hidden = !!L.donate;

  // Elenco delle edizioni (pagina principale).
  var list = document.getElementById("editions-list");
  if (list && window.IM_EDITIONS) {
    window.IM_EDITIONS.forEach(function (e) {
      var art = e.art.indexOf("svg:") === 0 ? window.IM_ART[e.art.slice(4)] : '<img src="' + e.art + '" alt="" loading="lazy">';
      var ready = e.status === "ready";
      var el = document.createElement("article");
      el.className = "ed";
      var page = "edition.html?e=" + e.id;
      el.innerHTML = '<a class="art" href="' + page + '" tabindex="-1" aria-hidden="true">' + art + '</a><div><h3><a href="' + page + '">' + e.name + "</a></h3><p>" + e.line + '</p><div class="row">' +
        '<span class="tag' + (ready ? " ready" : "") + '">' + (ready ? "Available" : "Coming soon") + "</span>" +
        '<a class="btn small" href="' + page + '">See it</a>' +
        (ready ? '<a class="btn small ghost" href="flash.html?edition=' + e.id + '">Install</a>' : "") + "</div></div>";
      list.appendChild(el);
    });
  }
})();
