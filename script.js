let canShowMessage = true;

document.getElementById('showMessage').addEventListener('click', function() {
    if (!canShowMessage) return;
    
    const messages = [
        "Eres mi ejemplo a seguir",
        "Tu sonrisa ilumina mi día",
        "Gracias por tu paciencia infinita",
        "Eres la mejor del mundo",
        "Te quiero muchísimo",
        "Contigo aprendi lo que significa amar sin limites",
        "Eres mi vida",
        "Eres la luz de mi vida",
        "Tus brazos son el refugio donde siempre quiero volver",
        "Eres el corazon de nuestro hogar.",
        "Madre solo hay una, y como la mia ninguna.",
        "Gracias por ser mi fuerza silenciosa y mi amor eterno.",
        "No hay pincel que pueda pintar el amor de una madre."
    ];
    
    const messageContainer = document.querySelector('.message');
    if (!messageContainer) {
        console.error('Error: Contenedor de mensajes no encontrado');
        return;
    }

    canShowMessage = false;

    // Mostrar nuevo mensaje
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const newMessage = document.createElement('p');
    newMessage.textContent = randomMessage;
    newMessage.className = 'dynamic-message';
    messageContainer.appendChild(newMessage);

    // Crear corazones
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-balloon';
            heart.innerHTML = '❤';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.bottom = '0';
            document.body.appendChild(heart);
        }, i * 200);
    }

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        newMessage.classList.add('fade-out');
        setTimeout(() => {
            newMessage.remove();
            canShowMessage = true;
        }, 500);
    }, 3000);  // Cambiado de 5000 a 3000 milisegundos (3 segundos)
});

document.getElementById('happyHeart').addEventListener('click', function() {
    this.classList.add('happy');
    setTimeout(() => {
        this.classList.remove('happy');
    }, 1000);
});