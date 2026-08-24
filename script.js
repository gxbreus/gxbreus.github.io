(function(){
  "use strict";

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add("is-visible"); });
  }

  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card");
  var heroCard = document.querySelector(".card-hero");
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      filterBtns.forEach(function(b){ b.classList.remove("is-active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected","true");
      var filter = btn.getAttribute("data-filter");
      cards.forEach(function(card){
        var match = filter === "all" || card.getAttribute("data-track") === filter;
        card.hidden = !match;
      });
      if (heroCard){
        heroCard.hidden = !(filter === "all" || heroCard.getAttribute("data-track") === filter);
      }
    });
  });

  var toggle = document.getElementById("themeToggle");
  if (toggle){
    toggle.addEventListener("click", function(){
      var root = document.documentElement;
      var current = root.getAttribute("data-theme");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var effective = current || (prefersDark ? "dark" : "light");
      var next = effective === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try{ localStorage.setItem("theme", next); }catch(e){}
    });
  }

})();
