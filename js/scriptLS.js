window.addEventListener("load", () => {
    const translations = {
      en: {
        aboutMeUl: "About me",
        acBgLi: "Academic Background",
        workExLi: "Work Experience",
        skillsUl: "Skills",
        langSkillsLi: "Linguistic Skills",
        dgSkillsLi: "Digital Skills",
        interestsUl: "Interests",
        hobbiesLi: "Hobbies",
        volunteeringLi: "Volunteering",
        contactFooter: "Contact me",
        emailFooter: "E-mail",
        socialMediaFooter: "Social Media",
        downloadCvFooter: "Download CV",
        titleAcademic: "Academic Background",
        spanAB1: "My academic journey is rooted in a passion for languages and communication, which I’ve cultivated through diverse educational           experiences. I began with a Bachelor's degree in Foreign Languages at           the National Autonomous University of Honduras (UNAH), where I           specialized in French. This foundation provided me with in-depth           knowledge of linguistics and cultural studies." ,
        spanAB2: "Continuing my academic journey, I am currently enrolled in the  Master's program in CAWEB (Multilingual Web Communication) at the          University of Strasbourg. This program has allowed me to develop          advanced skills in digital communication, web design, and multilingual          content creation, equipping me to thrive in the dynamic field of web          communication. These academic experiences have not only enriched my          linguistic abilities but also deepened my understanding of the          intersection between language, culture, and digital media.",
        titleDigitalSkills: "Digital Skills",
        pDS1: "My digital skills are a crucial part of my professional toolkit,    enabling me to effectively manage projects, create engaging content,           and streamline communication. I am proficient in the Office Suite,           which I use regularly for document creation, data analysis, and           presentations.",
        pDS2: "In addition to this, I have extensive experience with the Adobe Suite,           particularly in Premier Pro for editing visually appealing videos for           interviews carried by my classmates. This skill set has been essential           in my roles involving digital communication and content creation for           English Website of the CAWEB master’s program.",
        pDS3: "  I am also skilled in using Figma, a powerful tool for web and           interface design, which allows me to craft user-friendly and visually           appealing digital experiences. Notion is another tool in my           repertoire, where I managed project planning, collaboration, and           information organization as a project manager for the year 2023-2024           CAWEB English project.",
        pDS4: "These digital skills not only enhance my ability to communicate           effectively across various platforms but also ensure that I can           deliver high-quality digital content and manage complex projects           efficiently.",
        spanVideosDS: "You can check out the videos I edited here:",
        aKatarinaInterview: "",
        aCarolynInterview: "Carolyn Gubala's Interview",

  
      },
      es: {
        aboutMeUl: "Acerca de mí",
        acBgLi: "Formación académica",
        workExLi: "Experiencia Laboral",
        skillsUl: "Habilidades",
        langSkillsLi: "Habilidades Lingüísticas",
        dgSkillsLi: "Habilidades Digitales",
        interestsUl: "Intereses",
        hobbiesLi: "Pasatiempos",
        volunteeringLi: "Voluntariado",
        contactFooter: "Contáctame",
        emailFooter: "Correo",
        socialMediaFooter: "Redes sociales",
        downloadCvFooter: "Descargar CV",
        titleAcademic: "Formación Académica",
        spanAB1: "Mi trayectoria académica tiene sus raíces en la pasión por los idiomas y la comunicación, que he cultivado a través de diversas experiencias educativas. Comencé con una licenciatura en Lenguas Extranjeras en la Universidad Nacional Autónoma de Honduras (UNAH), donde me especialicé en la enseñanza del idioma francés. Esta base me proporcionó conocimientos profundos de lingüística y estudios culturales.",
        spanAB2: "Continuando con mi trayectoria académica, actualmente estoy matriculada en el programa de Máster en CAWEB (Comunicación Web Multilingüe) de la Universidad de Estrasburgo. Este programa me ha permitido desarrollar competencias avanzadas en comunicación digital, diseño web y creación de contenidos multilingües, equipándome para prosperar en el dinámico campo de la comunicación web. Estas experiencias académicas no sólo han enriquecido mis capacidades lingüísticas, sino que también han profundizado mi comprensión de la intersección entre lengua, cultura y medios digitales.",
        titleDigitalSkills: "Habilidades Digitales",
        pDS1: " Mis habilidades digitales son una parte crucial de mi kit de herramientas profesionales, lo que me permite gestionar eficazmente proyectos, crear contenidos atractivos y agilizar la comunicación. Domino la Suite de Office, que utilizo habitualmente para la creación de documentos, el análisis de datos y las presentaciones.",
        pDS2: "Además, tengo amplia experiencia con la Suite de Adobe, en particular con Premier Pro para editar vídeos visualmente atractivos para las entrevistas que realizan mis compañeros. Este conjunto de habilidades ha sido esencial en mis funciones relacionadas con la comunicación digital y la creación de contenidos para el sitio web en inglés del programa de máster CAWEB.",
        pDS3: "También sé utilizar Figma, una potente herramienta de diseño web y de interfaces que me permite crear experiencias digitales fáciles de usar y visualmente atractivas. Notion es otra herramienta de mi repertorio, con la que gestioné la planificación de proyectos, la colaboración y la organización de la información como jefa de proyectos para el grupo en proyecto de inglés del año 2023-2024 de CAWEB.",
        pDS4: "Estas habilidades digitales no solo mejoran mi capacidad para comunicarme de forma eficaz en diversas plataformas, sino que también me permiten ofrecer contenidos digitales de alta calidad y gestionar proyectos complejos de forma eficiente.",
        spanVideosDS: "Puede ver los videos que he editado aquí:",
        aKatarinaInterview: "Entrevista de Katarina Lechner",
        aCarolynInterview: "Entrevista de Carolyn Gubala",
      },
    };
  
    function translate(lang) {
      document.getElementById("aboutMeUl").innerText =
        translations[lang].aboutMeUl;
      document.getElementById("acBgLi").innerText = translations[lang].acBgLi;
      document.getElementById("workExLi").innerText = translations[lang].workExLi;
      document.getElementById("skillsUl").innerText = translations[lang].skillsUl;
      document.getElementById("langSkillsLi").innerText =
        translations[lang].langSkillsLi;
      document.getElementById("dgSkillsLi").innerText =
        translations[lang].dgSkillsLi;
      document.getElementById("interestsUl").innerText =
        translations[lang].interestsUl;
      document.getElementById("hobbiesLi").innerText =
        translations[lang].hobbiesLi;
      document.getElementById("volunteeringLi").innerText =
        translations[lang].volunteeringLi;
      document.getElementById("titleDigitalSkills").innerText =
        translations[lang].titleDigitalSkills;
      document.getElementById("pDS1").innerText =
        translations[lang].pDS1;
      document.getElementById("pDS2").innerText = translations[lang].pDS2;
      document.getElementById("pDS3").innerText = translations[lang].pDS3;
      document.getElementById("pDS4").innerText = translations[lang].pDS4;
      document.getElementById("spanVideosDS").innerText = translations[lang].spanVideosDS;
      document.getElementById("aKatarinaInterview").innerText = translations[lang].aKatarinaInterview;
      document.getElementById("aCarolynInterview").innerText = translations[lang].aCarolynInterview;
      document.getElementById("contactFooter").innerText =
        translations[lang].contactFooter;
      document.getElementById("emailFooter").innerText =
        translations[lang].emailFooter;
      document.getElementById("socialMediaFooter").innerText =
        translations[lang].socialMediaFooter;
      document.getElementById("downloadCvFooter").innerText =
        translations[lang].downloadCvFooter;
      }
    document.querySelectorAll(".langButtons").forEach((element) => {
      element.addEventListener("click", (e) => {
        translate(e.target.dataset.lang);
      });
    });
  });