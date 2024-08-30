window.addEventListener("load", ()=>{
    const translations = {
        en: {
           aboutMeUl: "About me",
           acBgLi: "Academic Background",
           workExLi: "Work Experience",
           skillsUl: "Skills",
           langSkillsLi: "Linguistic Skills"
        },
        es: {
            aboutMeUl: "Acerca de mí",
            acBgLi: "Formación académica",
            workExLi: "Experiencia Laboral",
            skillsUl: "Habilidades",
            langSkillsLi: "Habilidades Lingüísticas"
        }
    };
    
    function translate(lang) {
        document.getElementById('aboutMeUl').innerText = translations[lang].aboutMeUl;
        document.getElementById('acBgLi').innerText = translations[lang].acBgLi;
        document.getElementById('workExLi').innerText = translations[lang].workExLi;
        document.getElementById('skillsUl').innerText = translations[lang].skillsUl;
        document.getElementById('langSkillsLi').innerText = translations[lang].langSkillsLi;
    }
    document.querySelectorAll(".langButtons").forEach(element => {
        element.addEventListener("click", (e)=>{
            translate(e.target.dataset.lang)
        })
    });
    
 })