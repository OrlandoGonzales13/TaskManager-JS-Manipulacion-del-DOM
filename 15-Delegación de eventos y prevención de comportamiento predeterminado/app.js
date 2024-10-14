// PRIMERA MANERA: Añadir eventos individualmente a cada elemento <li>

// Seleccionamos todos los elementos <li> de la lista
// const listItems = document.querySelectorAll("li");

// Recorremos cada elemento <li> y le agregamos un evento 'click'
// listItems.forEach((item) => {
//     item.addEventListener("click", (event) => {
//         // Cuando se hace clic en el elemento, alternamos la clase "highlight"
//         event.target.classList.toggle("highlight");
//     });
// });

/* 
Explicación:
1. Seleccionamos cada uno de los elementos <li> de la lista usando 'querySelectorAll', lo que nos devuelve una lista de nodos (NodeList).
2. Usamos 'forEach' para recorrer cada elemento de esa lista.
3. Para cada <li>, agregamos un 'eventListener' de clic individualmente.
4. Cuando se hace clic en uno de estos elementos <li>, alternamos la clase 'highlight' usando 'classList.toggle', lo que cambia su estilo visual (como su color o fondo).
Inconveniente: 
- Si la lista es muy larga, este método puede ser **ineficiente** porque estamos añadiendo un listener a **cada** elemento de la lista por separado. Esto también es problemático si se añaden nuevos elementos a la lista después de cargar la página, ya que no tendrán el listener automáticamente.
*/

// SEGUNDA MANERA: Delegación de eventos usando el elemento padre <ul>

const list = document.querySelector("ul"); // Seleccionamos el elemento <ul> contenedor de los <li>

list.addEventListener("click", (event) => {
    // Detectamos el <li> más cercano al área del clic y alternamos la clase "highlight"
    const clickedItem = event.target.closest("li"); // Aseguramos que solo los <li> reaccionen
    if (clickedItem) { // Verificamos si se hizo clic en un <li>
        clickedItem.classList.toggle("highlight");
    }
});

/*
Explicación:
1. Seleccionamos el elemento padre <ul> en vez de los <li> directamente.
2. Añadimos un único 'eventListener' al <ul>, que será capaz de detectar clics en cualquiera de los <li> (incluso si se agregan nuevos elementos en el futuro).
3. Usamos 'event.target.closest("li")' para asegurarnos de que solo se ejecute cuando el clic ocurra en un <li> (esto evita problemas si se hace clic fuera de los <li>).
4. Si el clic fue en un <li>, alternamos la clase 'highlight' solo en ese elemento.
 
Ventajas:
- Este método es más **eficiente** porque solo añadimos un único listener al elemento padre <ul>.
- Funciona también para **nuevos elementos** que se añadan dinámicamente a la lista, sin necesidad de añadir listeners adicionales.
- **Delegación de eventos**: Aprovecha que los eventos de clic se propagan hacia los padres, lo que permite manejar eventos de varios elementos hijos con un solo listener.
*/