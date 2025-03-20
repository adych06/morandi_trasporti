// Assicurati che il DOM sia completamente caricato prima di eseguire il codice
document.addEventListener("DOMContentLoaded", function() {
    const busContainer = document.querySelector('.bus-container'); // Contenitore dove inserire i bus

    // Funzione per generare una card per ogni autobus
    function generateBusCard(bus) {
        // Crea la struttura HTML della card
        const busCard = document.createElement('div');
        busCard.classList.add('bus-card');

        // Aggiungi l'immagine
        const busImage = document.createElement('img');
        busImage.src = bus.image;
        busImage.alt = bus.name;
        busImage.classList.add('bus-image');
        busCard.appendChild(busImage);

        // Aggiungi il nome
        const busName = document.createElement('h2');
        busName.textContent = bus.name;
        busCard.appendChild(busName);

        // Aggiungi la capienza
        const busCapacity = document.createElement('p');
        busCapacity.classList.add('capacity');
        busCapacity.textContent = `Capienza: ${bus.capacity}`;
        busCard.appendChild(busCapacity);

        // Aggiungi il prezzo
        const busPrice = document.createElement('p');
        busPrice.classList.add('price');
        busPrice.textContent = bus.price;
        busCard.appendChild(busPrice);

        // Aggiungi il pulsante Info
        const infoBtn = document.createElement('button');
        infoBtn.classList.add('info-btn');
        infoBtn.textContent = 'Info e Prenota';
        busCard.appendChild(infoBtn);

        // Aggiungi il form per inviare la richiesta
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        const form = document.createElement('form');
        form.action = "https://formspree.io/f/xkgodnwp";
        form.method = "POST";

        const hiddenBus = document.createElement('input');
        hiddenBus.type = "hidden";
        hiddenBus.name = "bus";
        hiddenBus.value = bus.name;
        form.appendChild(hiddenBus);

        const hiddenCapacity = document.createElement('input');
        hiddenCapacity.type = "hidden";
        hiddenCapacity.name = "capacity";
        hiddenCapacity.value = bus.capacity;
        form.appendChild(hiddenCapacity);

        const hiddenPrice = document.createElement('input');
        hiddenPrice.type = "hidden";
        hiddenPrice.name = "price";
        hiddenPrice.value = bus.price;
        form.appendChild(hiddenPrice);

        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'La tua Email:';
        form.appendChild(emailLabel);

        const emailInput = document.createElement('input');
        emailInput.type = "email";
        emailInput.name = "email";
        emailInput.id = "email";
        emailInput.placeholder = "Inserisci la tua email";
        emailInput.required = true;
        form.appendChild(emailInput);

        const messageLabel = document.createElement('label');
        messageLabel.setAttribute('for', 'message');
        messageLabel.textContent = 'Messaggio:';
        form.appendChild(messageLabel);

        const messageTextarea = document.createElement('textarea');
        messageTextarea.name = "message";
        messageTextarea.id = "message";
        messageTextarea.placeholder = "Scrivi il tuo messaggio qui";
        messageTextarea.required = true;
        form.appendChild(messageTextarea);

        const submitButton = document.createElement('button');
        submitButton.type = "submit";
        submitButton.textContent = "Invia Richiesta";
        form.appendChild(submitButton);

        formContainer.appendChild(form);
        busCard.appendChild(formContainer);

        return busCard;
    }

    // Funzione per caricare tutti i bus dal file
    function loadBusData() {
        busData.forEach(bus => {
            const busCard = generateBusCard(bus);
            busContainer.appendChild(busCard);
        });
    }

    // Carica i bus
    loadBusData();
});
