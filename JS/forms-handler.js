// Inizializza EmailJS con il tuo Public Key
emailjs.init("ygsqQaBAQxEvH8Uru");

document.addEventListener('DOMContentLoaded', function() {
    // Gestione form di contatto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Gestione form di login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginForm);
    }

    // Gestione form di registrazione
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistrationForm);
    }
});

// Gestione form di contatto
function handleContactForm(e) {
    e.preventDefault();
    
    const email = document.getElementById('mail').value;
    const persone = document.getElementById('persone').value;
    const orario = document.getElementById('orario').value;
    const destinazione = document.getElementById('destinazione').value;
    const tappe = document.getElementById('tappe').value;

    const templateParams = {
        to_name: "Admin",
        from_email: email,
        persone: persone,
        orario: orario,
        destinazione: destinazione,
        tappe: tappe,
        timestamp: new Date().toLocaleString()
    };

    // Usa i tuoi veri SERVICE_ID e TEMPLATE_ID da EmailJS
    emailjs.send("service_ngbev5a", "template_ojc9mbc", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            showMessage('Prenotazione inviata con successo!', 'success', e.target);
        })
        .catch(function(error) {
            console.error("FAILED...", error);
            showMessage('Errore nell\'invio della prenotazione. Riprova più tardi.', 'error', e.target);
        });
}

// Gestione form di login
function handleLoginForm(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const templateParams = {
        form_type: 'Login Attempt',
        email: email,
        timestamp: new Date().toLocaleString()
        // Non inviare mai password via email!
    };

    sendEmail(templateParams, e.target);
}

// Gestione form di registrazione
function handleRegistrationForm(e) {
    e.preventDefault();
    
    const email = document.getElementById('regEmail').value;
    const name = document.getElementById('regName').value;
    const surname = document.getElementById('regSurname').value;

    const templateParams = {
        form_type: 'New Registration',
        email: email,
        name: name,
        surname: surname,
        timestamp: new Date().toLocaleString()
    };

    sendEmail(templateParams, e.target);
}

// Funzione generica per l'invio delle email
function sendEmail(templateParams, form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Invio in corso...';
    submitButton.disabled = true;

    // Sostituisci questi valori con i tuoi reali ID da EmailJS
    const SERVICE_ID = 'service_xxxxxx';  // Il tuo Service ID
    const TEMPLATE_ID = 'template_xxxxxx'; // Il tuo Template ID

    console.log('Invio email...', templateParams); // Per debug

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response);
            showMessage('Prenotazione inviata con successo!', 'success', form);
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            showMessage('Errore nell\'invio della prenotazione. Riprova più tardi.', 'error', form);
        })
        .finally(function() {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
}

// Funzione per mostrare messaggi
function showMessage(message, type, form) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Stili per il messaggio
    messageDiv.style.padding = '10px';
    messageDiv.style.margin = '10px 0';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.zIndex = '1000';
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#4CAF50';
        messageDiv.style.color = 'white';
    } else {
        messageDiv.style.backgroundColor = '#f44336';
        messageDiv.style.color = 'white';
    }

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Validazione email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validazione password
function validatePassword(password) {
    // Minimo 8 caratteri, almeno una lettera e un numero
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
} 