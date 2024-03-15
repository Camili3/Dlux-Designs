document.addEventListener("DOMContentLoaded", function() {
    //selecciona todos los botones de preguntas frecuentes
    var buttons = document.querySelectorAll('.arrow');

    //itera sobre los botones y añade un event listener a cada uno
    buttons.forEach(function(button) {
        //agrega un event listener de clic a cada botón
        button.addEventListener('click', function() {
            //encuentra el elemento padre li del botón
            var parentLi = button.parentElement;

            //encuentra el siguiente elemento hermano (la respuesta)
            var answer = parentLi.querySelector('.answer');

            //alterna la clase active en la respuesta para mostrarla/ ocultarla
            answer.classList.toggle('active');

            //cambia el texto del botón y el estilo según si la respuesta está activa o no
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
