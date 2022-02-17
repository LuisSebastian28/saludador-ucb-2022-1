import sumar from "./sumador";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    const nombre_input = name.value;

  div.innerHTML = "<p> Hola"+ nombre_input+"</p>";
});
