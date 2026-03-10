/* ---- SHARED COMPONENTS ---- */

(function () {

    /* ---- BASE PATH ---- */
    /* Counts how many directories deep this page is from the site root,
       then builds a relative prefix like '' / '../' / '../../' */
    const segments = window.location.pathname.split('/').filter(Boolean);
    const depth    = Math.max(0, segments.length - 1);
    const base     = depth > 0 ? Array(depth).fill('..').join('/') + '/' : '';

    /* ---- NAVIGATION ---- */
    const nav = document.querySelector('nav');
    if (nav) {
        nav.innerHTML = `
    <div class="nav-left">
        <div class="name"><a href="${base}index.html">Alessio Cicciarella</a></div>
        <div class="job">Graphic Designer</div>
    </div>

    <div class="nav-right">
        <div class="lang-switch">
            <span class="lang" data-lang="de">DE</span> /
            <span class="lang" data-lang="en">EN</span>
        </div>
        <a href="${base}public/about.html" class="nav-link about-text">About</a>
    </div>

    <div class="hamburger" onclick="toggleMenu()">…</div>

    <div class="mobile-menu" id="mobileMenu">
        <a href="${base}public/about.html" class="nav-link about-text">About</a>
        <div>
            <span class="lang" data-lang="de">DE</span> /
            <span class="lang" data-lang="en">EN</span>
        </div>
    </div>`;
    }

    /* ---- SIDE INFO ---- */
    const sideInfo = document.querySelector('.side-info');
    if (sideInfo) {
        sideInfo.innerHTML = `
    <div class="email"><a href="mailto:alessio.cicciarella@gmx.de">alessio.cicciarella@gmx.de</a></div>
    <a href="${base}public/imprint.html" class="imprint-link imprint-text">Imprint</a>`;
    }

    /* ---- FOOTER ---- */
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
    <div class="footer-left">
        <a href="${base}index.html"><img src="${base}public/icon.png" alt="Icon"></a>
    </div>
    <div class="footer-right">&#169; 2026</div>`;
    }

}());
