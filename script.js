(function(){
  "use strict";

  var translations = {
    "pt-BR": {
      title: "Gabriel Soares | Desenvolvedor Full-Stack e UX/UI Designer",
      description: "Portfólio de Gabriel Soares, desenvolvedor full-stack e UX/UI Designer. Projetos em React, TypeScript, Node.js, Python e Figma.",
      skipLink: "Pular para o conteúdo", brandLabel: "Gabriel Soares, início", navLabel: "Navegação principal",
      navProjects: "Projetos", navExperience: "Experiência", navAbout: "Sobre", navContact: "Contato",
      languageLabel: "Selecionar idioma", themeLabel: "Alternar tema claro/escuro", resumeLink: "Currículo PDF",
      heroKicker: "Desenvolvedor Full-Stack · UX/UI Designer",
      heroTitle: "Gabriel Soares.",
      heroLead: "Estudo Sistemas de Informação na UFLA e trabalho como desenvolvedor full-stack e UX/UI Designer. No <strong>SIDAGRO</strong>, desenho as telas no Figma e as implemento em React. No <strong>Só+1</strong>, trabalho no front-end e na API. Abaixo estão alguns dos projetos que melhor representam meu trabalho.",
      viewProjects: "Ver projetos", contactMe: "Falar comigo", location: "Lavras, MG, Brasil",
      projectsTitle: "Projetos selecionados", filterLabel: "Filtrar projetos", filterAll: "Todos", mainProject: "Projeto principal",
      sidagroIntro: "O SIDAGRO é o sistema de defesa agropecuária do Instituto Mineiro de Agropecuária. No projeto, trabalho tanto no design das telas quanto na implementação do front-end.",
      sidagroDev: "No React, crio componentes e integro as APIs dos módulos de vacinação, arrecadação, produtos e propriedades.",
      sidagroUx: "No Figma, desenho os fluxos e protótipos que servem de base para a implementação.", prototyping: "Prototipagem",
      alexaPill: "DEV · IA e Serverless", repositoryLink: "repositório ↗", caseStudyLink: "estudo de caso →",
      alexaDescription: "Criei esta integração para fazer perguntas abertas à OpenAI pela Alexa. O código roda na AWS Lambda, consulta a web e mantém o contexto enquanto a sessão está aberta.",
      soMaisUmPill: "DEV · Full-stack · Em produção",
      soMaisUmDescription: "Trabalho no front-end e na API do Só+1, um produto em produção para organizar futebol amador. Minhas entregas passam pelas áreas de Jogador, Admin e Owner, além de estoque, assinaturas, LGPD e notificações em tempo real.",
      valenzaDescription: "Criei este sistema para acompanhar talhões e lotes de café da Fazenda Valenza. Cada lote pode ser consultado publicamente por QR Code.",
      campusDescription: "Criei uma automação que leva pendências do calendário acadêmico para o Notion e reúne dados do Moodle e do Google Drive.",
      leadershipPill: "UX/UI · Liderança", essayProjectTitle: "Redesign da Plataforma de Redação Inteligente",
      essayProjectDescription: "Como UX/UI Designer e Coordenador de Design, organizei o redesign dos principais fluxos de uma plataforma de correção de redações e preparei o handoff para desenvolvimento.",
      leadershipTag: "Coordenação", nemasaDescription: "No NEMASA, transformei os requisitos de monitoramento da qualidade da água da UFLA em telas e fluxos mais fáceis de usar.", userResearch: "Pesquisa de usuário",
      experienceTitle: "Experiência", gedaiDate: "jul/2025 - atual", gedaiRole: "UI/UX Designer (Bolsista)", gedaiOrg: "FUNDECC / Laboratório GEDAI", gedaiDescription: "No SIDAGRO, desenho interfaces no Figma e implemento o front-end em React, trabalhando diretamente com a equipe do projeto.",
      emakersDate: "jan/2025 - abr/2026", emakersRole: "Designer & Gerente de Marketing", emakersDescription: "Cuidei de marketing, gestão de pessoas e entregas de design. Também liderei o design de uma plataforma de e-commerce para um cliente.",
      aboutTitle: "Sobre", aboutOne: "Na prática, costumo acompanhar a mesma interface em etapas diferentes. No <strong>SIDAGRO</strong>, começo no Figma e continuo no React. No <strong>Só+1</strong>, minha participação também chega à API.",
      aboutTwo: "Alguns projetos começaram com problemas do meu dia a dia. O <strong>Campus Task Sync</strong> organiza pendências acadêmicas no Notion, e o <strong>Alexa AI Bridge</strong> permite usar a OpenAI pela Alexa sem deixar um computador ligado.",
      toolsTitle: "Ferramentas do dia a dia", aiCloud: "IA e cloud", process: "Processo", automatedTests: "Testes automatizados",
      contactTitle: "Contato", availability: "Procuro oportunidades de estágio em Engenharia de Software, Produto ou Design.", footerLocation: "Gabriel Soares · Lavras, MG", footerMade: "Feito por mim em HTML e CSS. Publicado no GitHub Pages.",
      languageStatus: "Idioma alterado para português do Brasil."
    },
    en: {
      title: "Gabriel Soares | Full-Stack Developer and UX/UI Designer",
      description: "Portfolio of Gabriel Soares, a full-stack developer and UX/UI Designer. Projects built with React, TypeScript, Node.js, Python, and Figma.",
      skipLink: "Skip to content", brandLabel: "Gabriel Soares, home", navLabel: "Main navigation",
      navProjects: "Projects", navExperience: "Experience", navAbout: "About", navContact: "Contact",
      languageLabel: "Select language", themeLabel: "Switch light/dark theme", resumeLink: "Resume PDF",
      heroKicker: "Full-Stack Developer · UX/UI Designer",
      heroTitle: "Gabriel Soares.",
      heroLead: "I study Information Systems at UFLA and work as a full-stack developer and UX/UI Designer. At <strong>SIDAGRO</strong>, I design interfaces in Figma and build them in React. At <strong>Só+1</strong>, I work on both the front-end and the API. These are some of the projects that best represent my work.",
      viewProjects: "View projects", contactMe: "Get in touch", location: "Lavras, MG, Brazil",
      projectsTitle: "Selected projects", filterLabel: "Filter projects", filterAll: "All", mainProject: "Featured project",
      sidagroIntro: "SIDAGRO is the animal and plant health system used by Instituto Mineiro de Agropecuária. I work on both the interface design and the front-end implementation.",
      sidagroDev: "In React, I build components and integrate APIs for vaccination, revenue, product, and property modules.",
      sidagroUx: "In Figma, I design the flows and prototypes that guide implementation.", prototyping: "Prototyping",
      alexaPill: "DEV · AI & Serverless", repositoryLink: "repository ↗", caseStudyLink: "case study →",
      alexaDescription: "I built this integration to ask OpenAI open-ended questions through Alexa. It runs on AWS Lambda, searches the web, and keeps context while the session is open.",
      soMaisUmPill: "DEV · Full-stack · Live product",
      soMaisUmDescription: "I work on the front-end and API of Só+1, a live product for organizing amateur football. My work covers Player, Admin, and Owner areas, as well as inventory, subscriptions, privacy features, and real-time notifications.",
      valenzaDescription: "I built this system to track fields and coffee lots at Fazenda Valenza. Each lot can be viewed publicly through a QR code.",
      campusDescription: "I built an automation that sends academic calendar tasks to Notion and brings together data from Moodle and Google Drive.",
      leadershipPill: "UX/UI · Leadership", essayProjectTitle: "Essay Platform Redesign",
      essayProjectDescription: "As UX/UI Designer and Design Coordinator, I organized the redesign of the main workflows for an essay-review platform and prepared the developer handoff.",
      leadershipTag: "Leadership", nemasaDescription: "For NEMASA, I turned UFLA's water-quality monitoring requirements into screens and workflows that are easier to use.", userResearch: "User research",
      experienceTitle: "Experience", gedaiDate: "Jul 2025 - Present", gedaiRole: "UI/UX Designer (Research Fellow)", gedaiOrg: "FUNDECC / GEDAI Laboratory", gedaiDescription: "At SIDAGRO, I design interfaces in Figma and build the front-end in React, working directly with the project team.",
      emakersDate: "Jan 2025 - Apr 2026", emakersRole: "Designer & Marketing Manager", emakersDescription: "I worked on marketing, people management, and design delivery. I also led the design of an e-commerce platform for a client.",
      aboutTitle: "About", aboutOne: "In practice, I often follow the same interface through different stages. At <strong>SIDAGRO</strong>, I start in Figma and continue in React. At <strong>Só+1</strong>, my work also reaches the API.",
      aboutTwo: "Some projects started with problems from my own routine. <strong>Campus Task Sync</strong> organizes academic tasks in Notion, while <strong>Alexa AI Bridge</strong> makes OpenAI available through Alexa without leaving a computer running.",
      toolsTitle: "Everyday tools", aiCloud: "AI & cloud", process: "Process", automatedTests: "Automated testing",
      contactTitle: "Contact", availability: "I'm looking for internship opportunities in Software Engineering, Product, or Design.", footerLocation: "Gabriel Soares · Lavras, MG, Brazil", footerMade: "Built by me with HTML and CSS. Published on GitHub Pages.",
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
