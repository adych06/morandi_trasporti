let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Nascondi tutte le slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    // Torna alla prima slide se siamo alla fine
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Mostra la slide corrente
    slides[slideIndex - 1].style.display = "block";
    
    // Cambia slide ogni 3 secondi
    setTimeout(showSlides, 3000);
}

// Assicurati che le slide siano visibili all'inizio
document.addEventListener('DOMContentLoaded', function() {
    // Mostra la prima slide
    let firstSlide = document.getElementsByClassName("mySlides")[0];
    if (firstSlide) {
        firstSlide.style.display = "block";
    }
});