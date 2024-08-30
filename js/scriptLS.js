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
        titleLS: "Linguistic Skills",
        pLS1: "I am a passionate linguist with a strong command of multiple           languages, which has been integral to my work and studies. My native           language is Spanish, which has provided a solid foundation for my           linguistic pursuits. I am also fluent in English, having demonstrated           proficiency through the TOEFL exam, which has enabled me to           effectively communicate and work in English-speaking environments.",
        pLS2: "My          proficiency in French is at a C1 level, allowing me to comfortably          engage in both professional and casual conversations, as well as          academic settings. This skill has been particularly valuable during my          time in France, both in teaching and in my current role at the          University of Strasbourg.",
        pLS3: "Additionally, I possess a basic knowledge of          German (A2 level), which I continue to develop. This diverse           linguistic background enables me to navigate multicultural           environments with ease and enhances my ability to connect with people           from different linguistic and cultural backgrounds.",


  
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
        titleLS: "Habilidades Lingüísticas",
        pLS1: "Soy una lingüista apasionada con un gran dominio de varios idiomas, lo que ha sido fundamental para mi trabajo y mis estudios. Mi lengua materna es el español, que me ha proporcionado una base sólida para mis actividades lingüísticas. También hablo inglés con fluidez, habiendo demostrado mi competencia en el examen TOEFL, lo que me ha permitido comunicarme y trabajar eficazmente en entornos de habla inglesa.",
        pLS2: "Mi dominio del francés es de nivel C1, lo que me permite desenvolverme cómodamente tanto en conversaciones profesionales como informales, así como en entornos académicos. Esta habilidad ha sido especialmente valiosa durante mi estancia en Francia, tanto en la docencia como en mi puesto actual en la Universidad de Estrasburgo.",
        pLS3: "Además, poseo conocimientos básicos de alemán (nivel A2), que sigo perfeccionando. Estos diversos conocimientos lingüísticos me permiten desenvolverme con facilidad en entornos multiculturales y mejoran mi capacidad para conectar con personas de distintos orígenes lingüísticos y culturales.",
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
      document.getElementById("titleLS").innerText =
        translations[lang].titleLS;
      document.getElementById("pLS1").innerText =
        translations[lang].pLS1;
      document.getElementById("pLS2").innerText = translations[lang].pLS2;
      document.getElementById("pLS3").innerText = translations[lang].pLS3;
      
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