let slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

// You can add event listeners to your next and previous buttons
// Example: document.getElementById("next").addEventListener("click", nextSlide);
// Example: document.getElementById("prev").addEventListener("click", prevSlide);
