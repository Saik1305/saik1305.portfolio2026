/* ------------------ MOBILE MENU ------------------ */

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.querySelector(".hamburger");

    if (
        menu &&
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        menu.classList.remove("active");
    }
});

/* ------------------ TRANSLATIONS (UI ONLY) ------------------ */

const translations = {
    en: {
        job: "Graphic Designer",
        about: "About",
        imprint: "Imprint"
    },
    de: {
        job: "Grafikdesigner",
        about: "Über mich",
        imprint: "Impressum"
    }
};

const langButtons = document.querySelectorAll(".lang");

function setLanguage(lang) {

    /* ---------- UI TEXTS ---------- */

    const job = document.querySelector(".job");
    if (job) job.textContent = translations[lang].job;

    document.querySelectorAll(".about-text").forEach(el =>
        el.textContent = translations[lang].about
    );

    document.querySelectorAll(".imprint-text").forEach(el =>
        el.textContent = translations[lang].imprint
    );

    /* ---------- CONTENT BLOCKS ---------- */

    document.querySelectorAll(".lang-en").forEach(el =>
        el.style.display = lang === "en" ? "block" : "none"
    );

    document.querySelectorAll(".lang-de").forEach(el =>
        el.style.display = lang === "de" ? "block" : "none"
    );

    /* ---------- HTML LANG ATTRIBUTE ---------- */

    document.documentElement.lang = lang;

    /* ---------- ACTIVE BUTTON ---------- */

    langButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    /* ---------- SAVE CHOICE ---------- */

    localStorage.setItem("language", lang);
}

/* ---------- EVENT LISTENER ---------- */

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

/* ---------- LOAD SAVED LANGUAGE ---------- */

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