const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");

hamburg.addEventListener("click", () => {
    dropdown.style.transform = "translateY(0)";
    hamburg.style.display = "none";
    cancel.style.display = "block";
});

cancel.addEventListener("click", () => {
    dropdown.style.transform = "translateY(-500px)";
    cancel.style.display = "none";
    hamburg.style.display = "block";
});

var typed = new Typed(".Electrical-text", {
    strings: [
        "Electrical Engineering Student",
        "IoT Explorer",
        "C / C++ Programmer"
    ],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});

// ===== FADE ON SCROLL (JS MURNI) =====
const fadeElements = document.querySelectorAll(".fade");

const fadeOnScroll = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", fadeOnScroll);
window.addEventListener("load", fadeOnScroll);
