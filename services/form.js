document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Flatpickr en el campo de fecha
    flatpickr("#birthDate", {
        dateFormat: "m-d-Y",
        locale: "es" // Establecer el idioma a español

    });


    // Validar el formulario
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const message = document.getElementById('message').value;

        if (!validateEmail(email)) {
            alert('El correo electrónico no es válido. Ingrese un correo válido, por ejemplo: "email@ejemplo.com".');
            return;
        }

        if (!validateInput(name)) {
            alert('Nombre no válido. Ingrese un nombre válido, por ejemplo: "Lionel".');
            return;
        }

        if (!validateInput(lastName)) {
            alert('Apellido no válido. Ingrese un apellido válido, por ejemplo: "Messi".');
            return;
        }

        if (!validateInput(message)) {
            alert('Por favor, para enviar un mensaje o consulta rellene correctamente el campo con texto.');
            return;
        }
        
        alert('¡Mensaje enviado!');
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateInput(name) {
        if (!name.trim()) {
            return false;
        }
        const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ'.,:!"¿?]+( [A-Za-záéíóúÁÉÍÓÚñÑ'.,:!"¿?]+)*$/;
        return regex.test(name);
    }

    // Alternar el estilo de la página
    const toggleStyleIcon = document.getElementById('toggleStyle');

    toggleStyleIcon.addEventListener('click', () => {
        document.body.classList.toggle('alternate-style');
    });
});