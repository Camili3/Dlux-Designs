document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones de preguntas frecuentes
    var buttons = document.querySelectorAll('.arrow');

    // Itera sobre los botones y añade un event listener a cada uno
    buttons.forEach(function(button) {
        // Agrega un event listener de clic a cada botón
        button.addEventListener('click', function() {
            // Encuentra el elemento padre li del botón
            var parentLi = button.parentElement;

            // Encuentra el siguiente elemento hermano (la respuesta)
            var answer = parentLi.querySelector('.answer');

            // Alternar la clase 'active' en la respuesta para mostrarla u ocultarla
            answer.classList.toggle('active');

            // Cambiar el texto del botón y el estilo según si la respuesta está activa o no
            if (answer.classList.contains('active')) {
                button.textContent = '▲';
                button.style.backgroundColor = '#B36C64'; // Cambiar el color del botón activo si es necesario
            } else {
                button.textContent = '▼';
                button.style.backgroundColor = ''; // Restablecer el color del botón al valor predeterminado
            }
        });
    });
});