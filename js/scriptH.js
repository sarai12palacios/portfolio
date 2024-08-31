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
        ho1: "Hobbies",
        hotext1: "Outside of my professional life, I have a diverse range of hobbies that keep me inspired and energized. Reading is one of my greatest passions, whether it's immersing myself in the pages of a good book or diving into the latest web comics. This love for stories fuels my creativity and broadens my understanding of different perspectives and cultures.",
        hotext2: "Swimming is another activity I enjoy, as it helps me stay active and clear my mind. Whether it's in the pool or the open water, swimming provides a perfect balance of relaxation and physical challenge.",
        hotext3: "Traveling is something I cherish deeply. Exploring new places, meeting people from different cultures, and experiencing the world firsthand has enriched my life in countless ways and continually sparks my curiosity.",
        hotext4: "Finally, I’m an avid fan of series and films. I enjoy getting lost in a compelling story, whether it's a classic film or the latest binge-worthy series. This hobby not only entertains me but also feeds my appreciation for storytelling and visual art.",
        hotext5: "These hobbies reflect my love for creativity, exploration, and staying active—elements that I bring into every aspect of my life.",
  
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
        ho1: "Pasatiempos",
        hotext1: "Fuera de mi vida profesional, tengo una amplia gama de pasatiempos que me mantienen inspirada y llena de energía. Leer es una de mis grandes pasiones, ya sea sumergirme en las páginas de un buen libro o zambullirme en los últimos webcómics. Este amor por las historias alimenta mi creatividad y amplía mi comprensión de diferentes perspectivas y culturas.",
        hotext2: "La natación es otra actividad que me gusta, ya que me ayuda a mantenerme activa y a despejar la mente. Ya sea en la piscina o en aguas abiertas, la natación proporciona un equilibrio perfecto entre relajación y desafío físico.",
        hotext3: "Viajar es algo que aprecio profundamente. Explorar nuevos lugares, conocer gente de diferentes culturas y experimentar el mundo de primera mano ha enriquecido mi vida de innumerables maneras y despierta continuamente mi curiosidad.",
        hotext4: "Por último, soy una ávida fan de las series y las películas. Disfruto perdiéndome en una historia absorbente, ya sea una película clásica o la última serie que merezca un atracón. Esta afición no sólo me entretiene, sino que también alimenta mi aprecio por la narración y el arte visual.",
        hotext5: "Estas aficiones reflejan mi amor por la creatividad, la exploración y la actividad, elementos que llevo a todos los aspectos de mi vida.",
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
  