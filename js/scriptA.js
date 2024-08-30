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
        upperBarBanner: "Hello, my name is Indira, I am...",
        titleHome: "Welcome to my personal website!",
        spanHome:
          " I'm Indira Ramirez, a multilingual web communication specialist with a rich background in language education, translation, and digital communication. Currently, I'm pursuing a Master's in CAWEB at the University of Strasbourg, where I also work as a Pedagogical Coordinator and Communication Assistant. My journey has taken me from teaching languages in Honduras to assisting students in France, all while honing my skills in translation and digital tools. Here, you'll find insights into my professional experiences, projects, and the unique blend of cultures and languages that shape my approach to communication.",
        contactFooter: "Contact me",
        emailFooter: "E-mail",
        socialMediaFooter: "Social Media",
        downloadCvFooter: "Download CV",
        titleAcademic: "Academic Background",
        spanAB1: "My academic journey is rooted in a passion for languages and communication, which I’ve cultivated through diverse educational           experiences. I began with a Bachelor's degree in Foreign Languages at           the National Autonomous University of Honduras (UNAH), where I           specialized in French. This foundation provided me with in-depth           knowledge of linguistics and cultural studies." ,
        spanAB2: "Continuing my academic journey, I am currently enrolled in the  Master's program in CAWEB (Multilingual Web Communication) at the          University of Strasbourg. This program has allowed me to develop          advanced skills in digital communication, web design, and multilingual          content creation, equipping me to thrive in the dynamic field of web          communication. These academic experiences have not only enriched my          linguistic abilities but also deepened my understanding of the          intersection between language, culture, and digital media.",

  
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
        upperBarBanner: "Hola, mi nombre es Indira, soy...",
        titleHome: "¡Bienvenido a mi sitio web personal!",
        spanHome:
          "Soy Indira Ramírez, especialista en comunicación web multilingüe con una amplia experiencia en enseñanza de idiomas, traducción y comunicación digital. Actualmente estoy cursando un máster en CAWEB en la Universidad de Estrasburgo, donde también trabajo como coordinadora pedagógica y asistente de comunicación. Mi viaje me ha llevado desde la enseñanza de idiomas en Honduras hasta la formación de estudiantes en Francia, todo ello mientras perfeccionaba mis habilidades en traducción y herramientas digitales. Aquí encontrarás información sobre mis experiencias profesionales, mis proyectos y la mezcla única de culturas e idiomas que dan forma a mi enfoque de la comunicación.",
        contactFooter: "Contáctame",
        emailFooter: "Correo",
        socialMediaFooter: "Redes sociales",
        downloadCvFooter: "Descargar CV",
        titleAcademic: "Formación Académica",
        spanAB1: "Mi trayectoria académica tiene sus raíces en la pasión por los idiomas y la comunicación, que he cultivado a través de diversas experiencias educativas. Comencé con una licenciatura en Lenguas Extranjeras en la Universidad Nacional Autónoma de Honduras (UNAH), donde me especialicé en la enseñanza del idioma francés. Esta base me proporcionó conocimientos profundos de lingüística y estudios culturales.",
        spanAB2: "Continuando con mi trayectoria académica, actualmente estoy matriculada en el programa de Máster en CAWEB (Comunicación Web Multilingüe) de la Universidad de Estrasburgo. Este programa me ha permitido desarrollar competencias avanzadas en comunicación digital, diseño web y creación de contenidos multilingües, equipándome para prosperar en el dinámico campo de la comunicación web. Estas experiencias académicas no sólo han enriquecido mis capacidades lingüísticas, sino que también han profundizado mi comprensión de la intersección entre lengua, cultura y medios digitales.",
        
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
      document.getElementById("titleAcademic").innerText =
        translations[lang].titleAcademic;
      document.getElementById("spanAB1").innerText =
        translations[lang].spanAB1;
      document.getElementById("spanAB2").innerText = translations[lang].spanAB2;
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
  