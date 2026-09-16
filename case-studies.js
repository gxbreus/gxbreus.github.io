(function(){
  "use strict";
  var copy={
    "pt-BR":{title:"Estudos de caso | Gabriel Soares",description:"Como Gabriel Soares trabalhou em três projetos de desenvolvimento full-stack e UX/UI.",home:"Voltar ao portfólio",resume:"Currículo PDF",language:"Selecionar idioma",theme:"Alternar tema claro/escuro",status:"Idioma alterado para português do Brasil."},
    en:{title:"Case studies | Gabriel Soares",description:"How Gabriel Soares worked on three full-stack development and UX/UI projects.",home:"Back to portfolio",resume:"Resume PDF",language:"Select language",theme:"Switch light/dark theme",status:"Language changed to English."}
  };
  function applyLanguage(language,announce){
    var selected=language==="en"?"en":"pt-BR";
    document.documentElement.lang=selected;
    document.documentElement.setAttribute("data-language",selected);
    document.title=copy[selected].title;
    document.querySelector('meta[name="description"]').setAttribute("content",copy[selected].description);
    document.querySelectorAll("[data-lang-block]").forEach(function(el){el.hidden=el.getAttribute("data-lang-block")!==selected;});
    document.querySelectorAll("[data-language-option]").forEach(function(btn){var active=btn.getAttribute("data-language-option")===selected;btn.classList.toggle("is-active",active);btn.setAttribute("aria-pressed",String(active));});
    document.querySelectorAll("[data-home-link]").forEach(function(el){el.textContent=copy[selected].home;el.href=selected==="en"?"./?lang=en":"./";});
    document.querySelectorAll("[data-resume-link]").forEach(function(el){el.textContent=copy[selected].resume;el.href=selected==="en"?"resume-gabriel-soares.pdf":"curriculo-gabriel-soares.pdf";});
    var group=document.querySelector(".language-switcher"),toggle=document.getElementById("themeToggle");if(group)group.setAttribute("aria-label",copy[selected].language);if(toggle)toggle.setAttribute("aria-label",copy[selected].theme);
    try{localStorage.setItem("language",selected);var url=new URL(location.href);if(selected==="en")url.searchParams.set("lang","en");else url.searchParams.delete("lang");history.replaceState(null,"",url.pathname+url.search+url.hash);}catch(e){}
    if(announce)document.getElementById("languageStatus").textContent=copy[selected].status;
  }
  var query=new URLSearchParams(location.search).get("lang");var saved;try{saved=localStorage.getItem("language");}catch(e){}applyLanguage(query==="en"||(!query&&saved==="en")?"en":"pt-BR",false);
  if(location.hash)requestAnimationFrame(function(){requestAnimationFrame(function(){var target=document.querySelector(location.hash);if(target)target.scrollIntoView();});});
  document.querySelectorAll("[data-language-option]").forEach(function(btn){btn.addEventListener("click",function(){applyLanguage(btn.getAttribute("data-language-option"),true);});});
  var toggle=document.getElementById("themeToggle");if(toggle)toggle.addEventListener("click",function(){var root=document.documentElement;var next=root.getAttribute("data-theme")==="dark"?"light":"dark";root.setAttribute("data-theme",next);try{localStorage.setItem("theme",next);}catch(e){}});
})();
