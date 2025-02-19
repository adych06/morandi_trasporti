document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.LinkBar nav ul');

    // Funzione per gestire il menu in base alla dimensione dello schermo
    function handleMenuDisplay() {
        if (window.innerWidth > 1024) {
            // Desktop: mostra sempre il menu
            navMenu.classList.add('active');
            menuToggle.style.display = 'none';
        } else {
            // Mobile: nascondi il menu e mostra il toggle
            navMenu.classList.remove('active');
            menuToggle.style.display = 'block';
        }
    }

    // Esegui al caricamento
    handleMenuDisplay();

    // Esegui al ridimensionamento della finestra
    window.addEventListener('resize', handleMenuDisplay);

    // Gestione click sul menu hamburger (solo mobile)
    menuToggle.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
    });

    // Chiudi il menu quando si clicca su un link (solo mobile)
    document.querySelectorAll('.LinkBar nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1440) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Chiudi il menu quando si clicca fuori (solo mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1440) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
});