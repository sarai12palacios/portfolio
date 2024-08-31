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
        vo1: "Volunteering",
        votext1: "Volunteering has been a significant and fulfilling part of my life since I was 20 years old. My journey began with the Honduran Association for Kids with Cancer, where I had the privilege of meeting children and their families during incredibly challenging times and going to the streets on the National Day of children’s cancer awareness to collect money for the association. This experience taught me the importance of compassion and resilience.",
        votext2: "I then became involved with Rotaract, the youth branch of the Rotary movement. Through Rotaract, I engaged in various community service projects, focused on promoting education, health, and cultural exchange. One of the biggest projects I could be part of was 'Sleeping Children Around the World'. It was an enriching experience that allowed me to connect with like-minded individuals committed to making a positive difference in the world.",
        votext3: "In 2017, my volunteering journey took me to France, where I joined 'Les Petits Frères des Pauvres,' an association dedicated to combating isolation, particularly among the elderly. In today’s society, many seniors find themselves alone, and this organization works tirelessly to provide companionship and support. Being part of this mission has been deeply rewarding, as it allows me to give back to the community and make a meaningful impact on the lives of those who need it most.",
        votext4: "Volunteering has not only allowed me to contribute to causes I care about but has also shaped my perspective on life, reinforcing the value of empathy, community, and service to others.",
  
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
        vo1: "Voluntariado",
        votext1: "El voluntariado ha sido una parte importante y gratificante de mi vida desde que tenía 20 años. Mi experiencia comenzó con la Asociación Hondureña de Niños con Cáncer, donde tuve el privilegio de conocer a niños y a sus familias en momentos increíblemente difíciles y de salir a la calle el Día Nacional de concienciación sobre el cáncer infantil para recaudar dinero para la asociación. Esta experiencia me enseñó la importancia de la compasión y la resiliencia.",
        votext2: "Luego me involucré en Rotaract, la rama juvenil del movimiento rotario. A través de Rotaract, participé en varios proyectos de servicio a la comunidad, centrados en la promoción de la educación, la salud y el intercambio cultural. Uno de los proyectos más importantes en los que pude participar fue «Sleeping Children Around the World». Fue una experiencia enriquecedora que me permitió conectar con personas de ideas afines comprometidas a marcar una diferencia positiva en el mundo.",
        votext3: "En 2017, mi viaje de voluntariado me llevó a Francia, donde me uní a «Les Petits Frères des Pauvres», una asociación dedicada a combatir el aislamiento, especialmente entre las personas mayores. En la sociedad actual, muchas personas mayores se encuentran solas, y esta organización trabaja incansablemente para proporcionarles compañía y apoyo. Formar parte de esta misión ha sido profundamente gratificante, ya que me permite devolver algo a la comunidad y tener un impacto significativo en la vida de quienes más lo necesitan.",
        votext4: "El voluntariado no sólo me ha permitido contribuir a causas que me importan, sino que también ha moldeado mi perspectiva de la vida, reforzando el valor de la empatía, la comunidad y el servicio a los demás.",
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
      document.getElementById("spanHome").innerText = translations[lang].spanHome;
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
  