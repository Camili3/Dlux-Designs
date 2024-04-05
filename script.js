document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones de preguntas frecuentes
    var buttons = document.querySelectorAll('.arrow');

    // Itera sobre los botones y añade un event listener a cada uno
    buttons.forEach(function(button) {
        // Agrega un event listener de clic a cada botón
        button.addEventListener('click', function() {
            // Encuentra el elemento padre de la flecha (div.question)
            var parentQuestion = button.closest('.question');

            // Encuentra la respuesta correspondiente a la pregunta
            var answer = parentQuestion.querySelector('.answer');

            // Alterna la clase 'open' en el contenedor de la respuesta para mostrar/ocultar la respuesta
            answer.classList.toggle('active');

            // Cambia el texto y estilo del botón según si la respuesta está activa o no
            if (answer.classList.contains('active')) {
                button.textContent = '▲';
            } else {
                button.textContent = '▼';
            }
        });
    });   
});

