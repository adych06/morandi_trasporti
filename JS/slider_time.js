document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    const slideInterval = 4000; // 3 secondi

    // Funzione per nascondere tutte le slides e resettare i dots
    function hideAllSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }

    // Funzione per mostrare la slide corrente e attivare il dot corrispondente
    function showCurrentSlide() {
        hideAllSlides();
        slideIndex++;
        
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Funzione per cambiare slide quando si clicca su un dot
    function currentSlide(n) {
        hideAllSlides();
        slideIndex = n;
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Aggiungi click event listener ai dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            currentSlide(i + 1);
        });
    }

    // Inizializza lo slider
    function initSlider() {
        if (slides.length > 0) {
            hideAllSlides();
            slides[0].style.display = "block";
            dots[0].className += " active";
            
            // Avvia il cambio automatico delle slide
            setInterval(showCurrentSlide, slideInterval);
        }
    }

    // Avvia lo slider
    initSlider();
    
    // Log per debug
    console.log("Numero di slides trovate:", slides.length);
    console.log("Numero di dots trovati:", dots.length);
});
const prev = document.getElementById('prev');
const next = document.getElementById('next');

document.addEventListener('input', function() {
    if(prev.value = true){
        slideIndex--;
    }
    else{
        slideIndex++;
    }
});

