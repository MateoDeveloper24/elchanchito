let miImage = document.querySelector("img");
let miBoton = document.querySelector("button");
let miTitulo = document.getElementById("mainTitle");

const ROBOT_NUMO = "images/robot-numo.png"

/**
 * This code is assigning a function in charge of toggle the img src value
 */
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === ROBOT_NUMO)
    miImage.setAttribute("src", "images/dog1.png");
  else 
    miImage.setAttribute("src", "images/robot-numo.png");
};

/**
 * This code request the user to provide a name and the it assign a new title 
 * and also it saves the new name in the local storage
 */
function estableceNonbreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNonbreUsuario ();
  } else {
    localStorage.setItem("mi_titulo", "nombre");
    miTitulo.textContent = "Chanchito es genial," + miNombre;
  }
};

miBoton.onclick = estableceNonbreUsuario;
estableceNonbreUsuario()