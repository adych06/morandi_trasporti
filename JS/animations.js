const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.5 // L'animazione parte quando il 10% dell'immagine è visibile
});

document.querySelectorAll('img').forEach((img) => observer.observe(img));
