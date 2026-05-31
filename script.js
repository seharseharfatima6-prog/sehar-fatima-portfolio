/* ======================================
   SEHAR FATIMA PORTFOLIO
   Modern AI Portfolio Script
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       HERO FADE-IN ANIMATION
    ========================== */

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(30px)";
        heroContent.style.transition =
            "opacity 1s ease, transform 1s ease";

        setTimeout(() => {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 300);
    }

    /* ==========================
       SMOOTH SCROLL NAVIGATION
    ========================== */

    document.querySelectorAll('nav a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});

/* ==========================
   SECTION SCROLL ANIMATION
========================== */

const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);

document.querySelectorAll("section").forEach(section => {

    if (section.id !== "hero") {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(section);

    }

});

/* ==========================
   CARD HOVER EFFECTS
========================== */

document.querySelectorAll(
    ".project-card, .skill-card, .education-card"
).forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px) scale(1.02)";

        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

/* ==========================
   ACTIVE NAV LINK
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================
   EMAIL COPY BUTTON SUPPORT
   (Future Ready)
========================== */

function copyEmail() {

    navigator.clipboard.writeText(
        "seharseharfatima6@gmail.com"
    );

    alert("Email copied successfully!");

}

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(
    "Sehar Fatima Portfolio Loaded Successfully 🚀"
);
