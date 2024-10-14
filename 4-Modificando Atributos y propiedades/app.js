// Obtenemos el elemento del DOM con el id "input-id" y lo almacenamos en la variable 'input'
const input = document.getElementById("input-id");

// Mostramos el elemento en la consola para ver sus propiedades básicas
console.log(input);

// Usamos 'console.dir()' para visualizar todas las propiedades y métodos del objeto 'input'
console.dir(input);

// Mostramos el valor actual del campo de entrada (input), que representa lo que el usuario ha ingresado
console.dir(input.value);

// Cambiamos el valor del campo 'value' del input a "Apellido" y lo mostramos en la consola
console.dir(input.value = "Apellido");

// Mostramos en consola el nombre de la clase (o clases) que tiene el elemento 'input'
console.dir(input.className);

// Mostramos el atributo 'id' del elemento 'input' en la consola
console.dir(input.id);