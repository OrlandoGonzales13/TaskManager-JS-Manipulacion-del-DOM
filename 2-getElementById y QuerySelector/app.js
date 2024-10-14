//Busqueda especifica por ID
let titulo = document.getElementById("app-title")
console.log(titulo)


//QuerySelector trae el primer elemento que encuentra
let query = document.querySelector("p")
console.log(query)

//SELECTOR DE CLASES --> trae array con todas las clases
let clases = document.getElementsByClassName("menu-items");
console.log(clases)

//para traer todos los elementos en un html Collection
let p = document.getElementsByTagName("p")
console.log(p)

//para traer todos los elementos en NodeList
let allSelector = document.querySelectorAll(".menu-items")
console.log(allSelector)