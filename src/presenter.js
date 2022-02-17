import sumar from "./sumador";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#saludo-div");

const multi = document.querySelector("#genero-form");
const genero = document.querySelector("#genero-persona");
const resp = document.querySelector("#resultado-resp");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    const nombre_input = name.value;

  div.innerHTML = "<p> Hola "+ nombre_input+"</p>";
});

multi.addEventListener("submit", (event) => {
  event.preventDefault();

  const Gen = genero.value;  
  const Nombre = nombre.value;  
  
  if(Gen == "Varon"){
    resp.innerHTML = "<p> Hola Sr " + Nombre + "</p>";      
  }
  if(Gen == "Mujer"){
    resp.innerHTML = "<p> Hola Sra " + Nombre + "</p>";      
  }
});