// Obtenemos el elemento del DOM con el id "app-title" y lo almacenamos en la variable 'titulo'
const titulo = document.getElementById("app-title");

// Modificamos el estilo de fondo (background-color) del elemento 'titulo' a rojo (red)
console.dir(titulo.style.backgroundColor = "red");

// Cambiamos el color del texto (color) dentro del elemento 'titulo' a blanco (white)
console.dir(titulo.style.color = "white");

// Seleccionamos el primer elemento <menu> del documento usando 'querySelector' y lo guardamos en la variable 'menu'
const menu = document.querySelector("menu");

// Cambiamos el color de fondo (background-color) del elemento 'menu' a rojo (red)
console.dir(menu.style.backgroundColor = "red");

// Cambiamos el tamaño de la fuente (font-size) del texto dentro del elemento 'menu' a 25 píxeles
console.dir(menu.style.fontSize = "25px");

// Sobrescribimos la clase CSS del elemento 'menu', asignándole una nueva clase llamada "main-menu"
console.dir(menu.className = "main-menu");

