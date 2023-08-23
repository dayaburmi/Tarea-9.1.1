// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  const newArray = strangeArray.filter((element) => typeof (element) === "string");

  const arrayOrdenado = newArray.sort((a, b) => a.localeCompare(b, { sensitivity: 'base' }));
  // Para ordenar alfabeticamente un array uso el metodo array.sort() 
  //...Lo que pasa en este caso es que como el string "b is a letter" comienza con minuscula 
  //y todos los demás strings con mayúsculas va a perder ponderancia en el orden y lo va a mandar al final... 
  //pero utilizando el metodo localeCompare() compara los elementos a y b (los va a comparar todos en realidad) 
  //y con { sensitivity: 'base' } nos aseguramos que no va a ser sensible a las diferencias entre mayusculas y minusculas.

  showList(arrayOrdenado);

});
