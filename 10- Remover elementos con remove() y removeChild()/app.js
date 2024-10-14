// Seleccionamos el primer <li> con querySelector y lo mostramos en consola (ITEM 1)
const firstItem = document.querySelector(`li`);
console.log(firstItem);  // Muestra: <li>Item 1</li>

// Eliminamos el primer <li> directamente usando el método remove()
firstItem.remove();  // Elimina el <li> que se seleccionó

// Seleccionamos la lista <ul> y eliminamos su primer hijo usando removeChild
const list = document.querySelector(`ul`);
list.removeChild(list.firstElementChild);  // Elimina el primer <li> dentro de la <ul>

// - firstElementChild: Selecciona y elimina el primer hijo de tipo elemento
// - lastElementChild: Selecciona y elimina el último hijo de tipo elemento
// - childNodes[index]: Selecciona y elimina un hijo específico por su índice
// - querySelector: También se puede usar para seleccionar un hijo específico y eliminarlo
