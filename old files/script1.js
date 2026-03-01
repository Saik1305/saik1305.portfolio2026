function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        menu.classList.remove("active");
    }
});

const translations = {
    en: {
        job: "Graphic Designer",
        about: "About",
        imprint: "Imprint",
        aboutText: "Hello World",
        cv: "This is my CV",
        skills: "These are my skills"
    },
    de: {
        job: "Grafikdesigner",
        about: "Über mich",
        imprint: "Impressum",
        aboutText: "Hallo Welt",
        cv: "Das ist mein Lebenslauf",
        skills: "Das sind meine Skills"
    }
};

const langButtons = document.querySelectorAll(".lang");

function setLanguage(lang) {

    const job = document.querySelector(".job");
    if (job) job.textContent = translations[lang].job;

    document.querySelectorAll(".about-text").forEach(el =>
        el.textContent = translations[lang].about
    );

    document.querySelectorAll(".imprint-text").forEach(el =>
        el.textContent = translations[lang].imprint
    );

    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;

    langButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("language", lang);
}

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

/* ------------------ IMAGE LOAD ANIMATION ------------------ */

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    if (img.complete) {
        img.classList.add("loaded");
    } else {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    }
});