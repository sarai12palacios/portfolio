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
      spanHome: "Soy Indira Ramírez, especialista en comunicación web multilingüe con una amplia experiencia en enseñanza de idiomas, traducción y comunicación digital. Actualmente estoy cursando un máster en CAWEB en la Universidad de Estrasburgo, donde también trabajo como coordinadora pedagógica y asistente de comunicación. Mi viaje me ha llevado desde la enseñanza de idiomas en Honduras hasta la formación de estudiantes en Francia, todo ello mientras perfeccionaba mis habilidades en traducción y herramientas digitales. Aquí encontrarás información sobre mis experiencias profesionales, mis proyectos y la mezcla única de culturas e idiomas que dan forma a mi enfoque de la comunicación.",
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
    document.getElementById("upperBarBanner").innerText =
      translations[lang].upperBarBanner;
    document.getElementById("titleHome").innerText =
      translations[lang].titleHome;
    document.getElementById("spanHome").innerText =
      translations[lang].spanHome;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
    document.getElementById("volunteeringLi").innerText =
      translations[lang].volunteeringLi;
  }
  document.querySelectorAll(".langButtons").forEach((element) => {
    element.addEventListener("click", (e) => {
      translate(e.target.dataset.lang);
    });
  });
});
