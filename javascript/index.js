function toggleInfo(id) {
    var element = document.getElementById(id);
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide() {
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentSlide].style.display = 'block';
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide();
}

showSlide();
