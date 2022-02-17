import sumar from "./sumador";

const name = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#saludo-div");
//pal señor
const multi = document.querySelector("#genero-form");
const genero = document.querySelector("#genero-persona");
const resp = document.querySelector("#resultado-resp");
//pa la hora
const tiempo = document.querySelector("#hora-form");
const valor = document.querySelector("#hora");
const val = document.querySelector("#fin");
const hor = document.querySelector("#resultado-hor");

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


tiempo.addEventListener("submit", (event) => {
  event.preventDefault();

  const Nombre = nombre.value;  
  const time_xd = Number.parseInt(valor.value);  
  const end = val.value;    
  
  if(( time_xd < 12 && end =="am")){
    hor.innerHTML = "<p> Buenos dias " + Nombre + "</p>";      
  }
  if(( time_xd < 7 && end =="pm")){
    hor.innerHTML = "<p> Buenas tardes " + Nombre + "</p>";      
  }
  if(( time_xd > 7 && end =="pm")){
    hor.innerHTML = "<p> Buenas Noches " + Nombre + "</p>";      
  }   
});

