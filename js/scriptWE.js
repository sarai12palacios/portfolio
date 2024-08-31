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
        we1: "Work Experience",
        wetext1: "Over the years, I’ve had the privilege of working in various roles that have enriched my skills in communication, education, and customer service.",
        wetext2: "My professional journey began when I worked as a Language Teacher at Washington Academy and Dr. Estéban Mendoza School, where I taught both English and French to diverse groups of students, further honing my teaching abilities and intercultural communication skills. I then worked as a Language Assistant at Lycée Henry Meck and Lycée P. Oberlin in France, where I helped students improve their Spanish skills and gain a deeper understanding of Honduran culture. This experience solidified my passion for language education.",
        wetext3: "Transitioning into the digital realm, I worked as a Trilingual Customer Service Agent at Startek, where I supported Gogo's clients in English, French, and Spanish, helping them with connectivity issues and subscription inquiries. This role sharpened my customer service expertise and my ability to communicate effectively across languages. I also worked as a Communications Assistant at the University of Strasbourg, where I’ve gained valuable experience in digital communication, event planning, and content creation.",
        wetext4: "Additionally, I am currently the Pedagogical Coordinator for students for the online Master’s program 'TCLoc,' where I manage student coordination and event planning. Throughout my career, I’ve also been a Freelance Translator, working on a variety of documents and projects, allowing me to continually develop my translation skills and adapt to different industries and audiences. Each of these experiences has contributed to my professional growth, equipping me with a unique blend of skills in language, communication, and digital media.",

  
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
        we1: "Experiencia Laboral",
        wetext1: "A lo largo de los años, he tenido el privilegio de trabajar en varios puestos que han enriquecido mis habilidades en comunicación, educación y atención al cliente.",
        wetext2: "Mi trayectoria profesional comenzó cuando trabajé como profesora de idiomas en la Washington Academy y en el colegio Dr. Estéban Mendoza, donde impartí clases de inglés y francés a diversos grupos de estudiantes, perfeccionando aún más mis habilidades docentes y de comunicación intercultural. Después trabajé como asistente de lenguas extranjeras en el Lycée Henry Meck y en el Lycée P. Oberlin de Francia, donde ayudé a los estudiantes a mejorar sus conocimientos de español y a conocer mejor la cultura hondureña. Esta experiencia consolidó mi pasión por la enseñanza de idiomas.",
        wetext3: "Al pasar al ámbito digital, trabajé como agente trilingüe de atención al cliente en Startek, donde atendía a los clientes de Gogo en inglés, francés y español, ayudándoles con problemas de conectividad y consultas sobre suscripciones. Este puesto afinó mi experiencia en atención al cliente y mi capacidad para comunicarme eficazmente en varios idiomas. También he trabajado como asistente de comunicación en la Universidad de Estrasburgo, donde he adquirido una valiosa experiencia en comunicación digital, planificación de eventos y creación de contenidos.",
        wetext4: "Además, actualmente soy coordinadora pedagógica para los estudiantes del programa de máster en línea «TCLoc», donde gestiono la coordinación de los estudiantes y la planificación de eventos. A lo largo de mi carrera, también he sido traductora independiente, trabajando en una gran variedad de documentos y proyectos, lo que me ha permitido desarrollar continuamente mis habilidades de traducción y adaptarme a diferentes sectores y audiencias. Cada una de estas experiencias ha contribuido a mi crecimiento profesional y me ha dotado de una combinación única de conocimientos lingüísticos, comunicativos y digitales.",
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