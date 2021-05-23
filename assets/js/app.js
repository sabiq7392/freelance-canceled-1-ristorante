
const nav = document.querySelector("#nav-link-wrapper");
const lineWrapper = document.querySelector("#line-wrapper");

// ====================== Humburger.
const humburger = document.querySelector(".humburger");
const lineHum = [
    document.querySelector("#hum-satu"),
    document.querySelector("#hum-dua"),
    document.querySelector("#hum-tiga")
]

humburger.addEventListener("click", function() {
    lineHum[0].classList.toggle("invert-rotated");
    lineHum[1].classList.toggle("d-none");
    lineHum[2].classList.toggle("rotated");
    lineWrapper.classList.toggle("stay-position");
    nav.classList.toggle("show-nav");
});