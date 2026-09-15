(function(){
  "use strict";

  var translations = {
    "pt-BR": {
      title: "Gabriel Soares — Desenvolvedor Full-Stack & UX/UI Designer",
      description: "Gabriel Soares — Desenvolvedor Full-Stack e UX/UI Designer, estudante de Sistemas de Informação. Desenvolvimento de produtos e design de interfaces para sistemas reais.",
      skipLink: "Pular para o conteúdo", brandLabel: "Gabriel Soares — início", navLabel: "Navegação principal",
      navProjects: "Projetos", navExperience: "Experiência", navAbout: "Sobre", navContact: "Contato",
      languageLabel: "Selecionar idioma", themeLabel: "Alternar tema claro/escuro", resumeLink: "Currículo PDF",
      heroKicker: "Desenvolvedor Full-Stack · UX/UI Designer",
      heroTitle: "Escrevo o código<br><span class=\"hero-emphasis\">e desenho a interface</span>.",
      heroLead: "Sou o Gabriel — estudante de Sistemas de Informação na UFLA. No <strong>SIDAGRO</strong>, sistema governamental de defesa agropecuária do IMA, desenho e implemento interfaces. Também desenvolvo o <strong>Só+1</strong>, um SaaS em produção, no front-end e no back-end.",
      viewProjects: "Ver projetos", contactMe: "Falar comigo", location: "Lavras, MG — Brasil",
      projectsTitle: "Projetos selecionados", filterLabel: "Filtrar projetos", filterAll: "Todos", mainProject: "Projeto principal",
      sidagroIntro: "Sistema governamental de defesa agropecuária do Instituto Mineiro de Agropecuária (IMA). Atuo nos dois lados: desenvolvo o front-end e desenho a interface como UX/UI Designer.",
      sidagroDev: "Componentes reutilizáveis e consumo de APIs REST nos módulos de vacinação, arrecadação, produtos e propriedades.",
      sidagroUx: "Prototipação, identidade visual e estruturação de fluxo de navegação no Figma.", prototyping: "Prototipagem",
      alexaPill: "DEV · IA e Serverless", repositoryLink: "repositório ↗", caseStudyLink: "estudo de caso →",
      alexaDescription: "Integração da Alexa com a OpenAI em Python, executada na AWS Lambda. O assistente consulta a web antes de responder e mantém o contexto durante a sessão.",
      soMaisUmPill: "DEV · Full-stack · Em produção",
      soMaisUmDescription: "SaaS de organização de futebol amador em produção. Atuo na API (estoque, assinaturas via Stripe, LGPD) e no front-end (áreas de Jogador e dashboards de Admin/Owner, com notificações em tempo real via SSE).",
      valenzaDescription: "Sistema próprio de gestão de talhões e rastreabilidade de lotes de café, com consulta pública por QR Code.",
      campusDescription: "Sincroniza pendências do calendário acadêmico com o Notion, integrando Moodle e Google Drive.",
      leadershipPill: "UX/UI · Liderança", essayProjectTitle: "Redesign da Plataforma de Redação Inteligente",
      essayProjectDescription: "UX/UI Designer e Coordenador de Design — redesenho de fluxos de uma EdTech de correção de redações, com handoff completo para desenvolvimento.",
      leadershipTag: "Coordenação", nemasaDescription: "Design de um sistema de monitoramento da qualidade da água na UFLA, traduzindo requisitos científicos em uma solução intuitiva.", userResearch: "Pesquisa de usuário",
      experienceTitle: "Experiência", gedaiDate: "jul/2025 — atual", gedaiRole: "UI/UX Designer (Bolsista)", gedaiOrg: "FUNDECC / Laboratório GEDAI", gedaiDescription: "Design e desenvolvimento front-end do SIDAGRO (IMA) — do Figma ao React, em colaboração direta com a equipe.",
      emakersDate: "jan/2025 — abr/2026", emakersRole: "Designer & Gerente de Marketing", emakersDescription: "Marketing, gestão de pessoas e design das entregas. Liderei o design de uma plataforma de e-commerce para cliente real.",
      aboutTitle: "Sobre", aboutOne: "No <strong>SIDAGRO</strong>, sistema governamental do Instituto Mineiro de Agropecuária, desenho a interface no Figma e a implemento em React — atuando como UX/UI Designer e desenvolvedor front-end no mesmo projeto. No <strong>Só+1</strong>, SaaS de organização de futebol amador em produção, contribuo na API e no front-end.",
      aboutTwo: "Já liderei o design de sistemas para a UFLA (NEMASA) e coordenei o redesign de uma plataforma EdTech. Também criei o <strong>Alexa AI Bridge</strong>, conectando a Alexa à OpenAI com Python e AWS Lambda.",
      toolsTitle: "Ferramentas do dia a dia", aiCloud: "IA e cloud", process: "Processo", automatedTests: "Testes automatizados",
      contactTitle: "Contato", availability: "Aberto a estágio em Engenharia de Software e Produto & Design.", footerLocation: "Gabriel Soares · Lavras, MG", footerMade: "Feito com HTML, CSS e cuidado — hospedado no GitHub Pages.",
      languageStatus: "Idioma alterado para português do Brasil."
    },
    en: {
      title: "Gabriel Soares — Full-Stack Developer & UX/UI Designer",
      description: "Gabriel Soares — Full-Stack Developer and UX/UI Designer studying Information Systems. Product development and interface design for real-world systems.",
      skipLink: "Skip to content", brandLabel: "Gabriel Soares — home", navLabel: "Main navigation",
      navProjects: "Projects", navExperience: "Experience", navAbout: "About", navContact: "Contact",
      languageLabel: "Select language", themeLabel: "Switch light/dark theme", resumeLink: "Resume PDF",
      heroKicker: "Full-Stack Developer · UX/UI Designer",
      heroTitle: "I write the code<br><span class=\"hero-emphasis\">and design the interface</span>.",
      heroLead: "I'm Gabriel, an Information Systems student at UFLA. At <strong>SIDAGRO</strong>, a government animal and plant health system for IMA, I design and implement interfaces. I also work on <strong>Só+1</strong>, a live SaaS product, across both front-end and back-end.",
      viewProjects: "View projects", contactMe: "Get in touch", location: "Lavras, MG — Brazil",
      projectsTitle: "Selected projects", filterLabel: "Filter projects", filterAll: "All", mainProject: "Featured project",
      sidagroIntro: "A government animal and plant health system for Instituto Mineiro de Agropecuária (IMA). I contribute on both sides: developing the front-end and designing the interface as a UX/UI Designer.",
      sidagroDev: "Reusable components and REST API integration across vaccination, revenue, product, and property modules.",
      sidagroUx: "Prototyping, visual identity, and navigation flow design in Figma.", prototyping: "Prototyping",
      alexaPill: "DEV · AI & Serverless", repositoryLink: "repository ↗", caseStudyLink: "case study →",
      alexaDescription: "An Alexa integration with OpenAI built in Python and deployed on AWS Lambda. The assistant searches the web before answering and keeps conversational context throughout the session.",
      soMaisUmPill: "DEV · Full-stack · Live product",
      soMaisUmDescription: "A live SaaS platform for organizing amateur football. I contribute to the API (inventory, Stripe subscriptions, and GDPR/LGPD) and the front-end (Player areas, Admin/Owner dashboards, and real-time SSE notifications).",
      valenzaDescription: "A farm management system for field tracking and coffee lot traceability, with public access through QR codes.",
      campusDescription: "Syncs academic calendar tasks with Notion by integrating Moodle and Google Drive.",
      leadershipPill: "UX/UI · Leadership", essayProjectTitle: "Essay Platform Redesign",
      essayProjectDescription: "UX/UI Designer and Design Coordinator — redesigned the core flows of an EdTech essay-review platform and delivered a complete developer handoff.",
      leadershipTag: "Leadership", nemasaDescription: "Designed a water-quality monitoring system for UFLA, translating scientific requirements into an intuitive experience.", userResearch: "User research",
      experienceTitle: "Experience", gedaiDate: "Jul 2025 — Present", gedaiRole: "UI/UX Designer (Research Fellow)", gedaiOrg: "FUNDECC / GEDAI Laboratory", gedaiDescription: "UX/UI design and front-end development for SIDAGRO (IMA), taking interfaces from Figma to React in direct collaboration with the team.",
      emakersDate: "Jan 2025 — Apr 2026", emakersRole: "Designer & Marketing Manager", emakersDescription: "Marketing, people management, and delivery design. Led the design of an e-commerce platform for a real client.",
      aboutTitle: "About", aboutOne: "At <strong>SIDAGRO</strong>, a government system for Instituto Mineiro de Agropecuária, I design interfaces in Figma and implement them in React, working as both UX/UI Designer and front-end developer. At <strong>Só+1</strong>, a live amateur football SaaS product, I contribute to the API and front-end.",
      aboutTwo: "I have led the design of systems for UFLA (NEMASA) and coordinated the redesign of an EdTech platform. I also created <strong>Alexa AI Bridge</strong>, connecting Alexa to OpenAI with Python and AWS Lambda.",
      toolsTitle: "Everyday tools", aiCloud: "AI & cloud", process: "Process", automatedTests: "Automated testing",
      contactTitle: "Contact", availability: "Open to internships in Software Engineering and Product & Design.", footerLocation: "Gabriel Soares · Lavras, MG, Brazil", footerMade: "Built with HTML, CSS, and care — hosted on GitHub Pages.",
      languageStatus: "Language changed to English."
    }
  };

  function applyLanguage(language, announce){
    var selectedLanguage = language === "en" ? "en" : "pt-BR";
    var copy = translations[selectedLanguage];
    document.documentElement.lang = selectedLanguage;
    document.documentElement.setAttribute("data-language", selectedLanguage);
    document.title = copy.title;
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.description);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", selectedLanguage === "en" ? "https://gxbreus.github.io/?lang=en" : "https://gxbreus.github.io/");
    document.querySelectorAll("[data-i18n]").forEach(function(element){
      var key = element.getAttribute("data-i18n");
      if (copy[key]) element.textContent = copy[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(element){
      var key = element.getAttribute("data-i18n-html");
      if (copy[key]) element.innerHTML = copy[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(element){
      var key = element.getAttribute("data-i18n-aria");
      if (copy[key]) element.setAttribute("aria-label", copy[key]);
    });
    document.querySelectorAll("[data-language-option]").forEach(function(button){
      var active = button.getAttribute("data-language-option") === selectedLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-resume-link]").forEach(function(link){
      link.setAttribute("href", selectedLanguage === "en" ? "resume-gabriel-soares.pdf" : "curriculo-gabriel-soares.pdf");
    });
    document.querySelectorAll("[data-case-link]").forEach(function(link){
      var target = link.getAttribute("data-case-link");
      link.setAttribute("href", "case-studies.html" + (selectedLanguage === "en" ? "?lang=en" : "") + "#" + target);
    });
    try{
      localStorage.setItem("language", selectedLanguage);
      var url = new URL(window.location.href);
      if (selectedLanguage === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
      history.replaceState(null, "", url.pathname + url.search + url.hash);
    }catch(e){}
    if (announce){
      var status = document.getElementById("languageStatus");
      if (status) status.textContent = copy.languageStatus;
    }
  }

  var initialLanguage = document.documentElement.getAttribute("data-language") === "en" ? "en" : "pt-BR";
  applyLanguage(initialLanguage, false);
  document.querySelectorAll("[data-language-option]").forEach(function(button){
    button.addEventListener("click", function(){ applyLanguage(button.getAttribute("data-language-option"), true); });
  });

  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".card, .card-hero");
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      filterBtns.forEach(function(item){ item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-pressed", "true");
      var filter = btn.getAttribute("data-filter");
      cards.forEach(function(card){
        var tracks = (card.getAttribute("data-track") || "").split(" ");
        card.hidden = !(filter === "all" || tracks.indexOf(filter) !== -1);
      });
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
