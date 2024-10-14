// Seleccionamos el primer botón encontrado en el documento HTML
const button = document.querySelector("button");

// Definimos la función que se ejecutará cuando ocurra el evento 'click'
// 'event' es el objeto evento (eventObject) que contiene información sobre el evento que ocurrió
const buttonClickedEvent = (event) => {
    // Imprimimos el objeto evento completo en la consola, contiene detalles del evento
    console.log(event);
    // Imprimimos el elemento HTML que disparó el evento (en este caso, el botón que se clickeó)
    console.log(event.target);
    // Imprimimos el 'id' del elemento que fue clickeado (si tiene un 'id')
    console.log(event.target.id);
    // Imprimimos el texto contenido dentro del botón clickeado
    console.log(event.target.textContent);
};

// Añadimos un listener de eventos al botón, que ejecuta la función 'buttonClickedEvent'
// cada vez que el botón es clickeado
button.addEventListener("click", buttonClickedEvent);