//LLEGAR A ELEMENTOS HIJOS

//1-PADRE
const parent = document.getElementById("parent");
console.log("PADRE")
console.log(parent);

//2-HIJOS

const children = parent.children;
console.log("HIJOS")
console.log(children);

//3- SOLO EL PRIMER HIJO
const firstChild = parent.firstElementChild;
console.log("PRIMER HIJO")
console.log(firstChild);

//4- ULTIMO HIJO
const lastChild = parent.lastElementChild;
console.log("ULTIMO HIJO")
console.log(lastChild);

//5- UN ELEMENTO ANTES
const previousSibling = parent.previousElementSibling;
console.log("ELEMENTO ANTERIOR")
console.log(previousSibling);

//6- SIGUIENTE ELEMENTO (NO HIJO)
const nextSibling = parent.nextElementSibling;
console.log("SIGUIENTE ELEMENTO (NO HIJO)")
console.log(nextSibling);

// children; // live HTMLCollection
// childNodes; // live NodeList
// firstChild; // live NodeList
// firstElementChild; // non-live HTMLCollection
// lastChild; // live NodeList
// lastElementChild; // non-live HTMLCollection
// previousSibling; // live NodeList
// previousElementSibling; // non-live HTMLCollection
// nextSibling; // live NodeList
// nextElementSibling; // non-live HTMLCollection

//7- SELECCIONAR PRIMER LI
const children2 = document.querySelector("li");
console.log("PRIMER LI")
console.log(children2);

//8- SELECCIONAR PADRE DE LA POSICION DONDE ESTOY (li)
const parent2 = children2.parentNode;
console.log("PADRE")
console.log(parent2);

//8- SELECCIONAR ELEMENTO PADRE
const grandParent = children2.parentElement;
console.log("PADRE")
console.log(grandParent);

//9- ELEMENTO MAS CERCADO QUE SE PARESCA O SEA MENU
const grandGrandParent = children2.closest("menu"); // este último es el más utilizado
console.log("ELEMENTO MAS CERCADO QUE SE PARESCA O SEA MENU")
console.log(grandGrandParent);

// parentNode; // live NodeList
// parentElement; // non-live HTMLCollection
// closest(selector); // este último es el más utilizado