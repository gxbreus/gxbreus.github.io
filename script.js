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
    });
  });

})();
