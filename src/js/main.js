//Funcion para abrir modal popup

const abrirBotonesModal = document.querySelectorAll('[data-modal-target]')
const cerrarBotonesModal = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

abrirBotonesModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    abrirModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    cerrarModal(modal)
  })
})

cerrarBotonesModal.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    cerrarModal(modal)
    window.location.reload();
  })
})

function abrirModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function cerrarModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Funcion para mostrar y ocultar inputs - ingreso o egreso

let montoIngresos = document.getElementById('montoIngresos');
let montoEgresos = document.getElementById('montoEgresos');

function mostrarInputIngresos() {
  montoIngresos.style.display = "block";
  montoEgresos.style.display = "none";
}

function mostrarInputEgresos() {
  montoIngresos.style.display = "none";
  montoEgresos.style.display = "block";
}

//Funcion para cargar datos de formulario a tabla

const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let datosFormulario = new FormData(form);
  let objeto = convertirFormDataAObjeto(datosFormulario);
  guardarDatos(objeto);
  insertarFilaEnFormulario(objeto);
  form.reset();
})

document.addEventListener("DOMContentLoaded", function (event) {
  let objetoArray = JSON.parse(localStorage.getItem("dataItems"))
  objetoArray.forEach(
    function (elementoArray) {

      //Cuenta la cantidad de items
      let cantidad = document.getElementById("cantidad");
      cantidad.innerText = objetoArray.length;

      //Cuenta los ingresos, egresos y balance
      let ingresos = document.getElementById("valor-ingresos");
      let egresos = document.getElementById("valor-egresos");
      let balance = document.getElementById("valor-balance");

      let sumaIngresos = 0;
      objetoArray.forEach(elem => sumaIngresos += elem.ingreso);
      ingresos.innerText = "$" + sumaIngresos;

      let sumaEgresos = 0;
      objetoArray.forEach(elem => sumaEgresos += elem.egreso);
      egresos.innerText = "$" + sumaEgresos;

      let operacionBalance = sumaIngresos - sumaEgresos;
      balance.innerText = "$" + operacionBalance;

      insertarFilaEnFormulario(elementoArray)
    }
  )
})

//Funcion que asigna ID a elemento TR (fila)

function obtenerNuevoId() {
  let ultimoId = localStorage.getItem("ultimoId") || "-1"
  let nuevoId = JSON.parse(ultimoId) + 1;
  localStorage.setItem("ultimoId", JSON.stringify(nuevoId))
  return nuevoId;
}

function convertirFormDataAObjeto(datosFormulario) {
  let tipo = datosFormulario.get("tipo")
  let nombre = datosFormulario.get("nombre")
  let categoria = datosFormulario.get("categoria");
  let ingreso = datosFormulario.get("ingreso");
  let egreso = datosFormulario.get("egreso");
  let id = obtenerNuevoId();
  return {
    "tipo": tipo,
    "categoria": categoria,
    "nombre": nombre,
    "ingreso": (parseInt(ingreso)),
    "egreso": (parseInt(egreso)),
    "id": id
  }
}

//Funcion que añade fila a la tabla

function insertarFilaEnFormulario(objeto) {
  let tabla = document.getElementById("tabla");

  let nuevaFilaDeTabla = tabla.insertRow(-1);
  nuevaFilaDeTabla.setAttribute("class", "fila-container", ["id"])
  nuevaFilaDeTabla.setAttribute("data-id", objeto["id"])

  let nuevaCelda = nuevaFilaDeTabla.insertCell(0);
  nuevaCelda.textContent = objeto["tipo"];
  nuevaCelda.setAttribute("class", "celda-tipo", ["tipo"]);

  nuevaCelda = nuevaFilaDeTabla.insertCell(1);
  nuevaCelda.textContent = objeto["categoria"];
  nuevaCelda.setAttribute("class", "celda-categoria", ["categoria"]);

  nuevaCelda = nuevaFilaDeTabla.insertCell(2);
  nuevaCelda.textContent = objeto["nombre"];
  nuevaCelda.setAttribute("class", "celda-nombre", ["nombre"]);

  nuevaCelda = nuevaFilaDeTabla.insertCell(3);
  if (objeto.ingreso == null) {
    nuevaCelda.textContent = objeto["egreso"];
  } else {
    nuevaCelda.textContent = objeto["ingreso"];
  }
  nuevaCelda.setAttribute("id", "celda-monto", ["monto"]);
  nuevaCelda.setAttribute("class", "celda-monto", ["monto"]);

  let eliminar = nuevaFilaDeTabla.insertCell(4);
  let botonEliminar = document.createElement("ion-icon");
  botonEliminar.name = "trash-outline";
  botonEliminar.setAttribute("id", "btn-eliminar");
  botonEliminar.setAttribute("onclick", "disminuir();");
  eliminar.appendChild(botonEliminar)

  //Funcion para borrar fila

  //Al hacer click en el boton eliminar, toma la fila, luego toma el valor de data-id
  botonEliminar.addEventListener("click", (event) => {
    let fila = event.target.parentNode.parentNode;
    let id = fila.getAttribute("data-id");
    fila.remove()
    eliminarDatos(id);
  })
}

//Funcion para borrar elemento en el array de localstorage

//le paso como parametro el id de el item que quiero eliminar
function eliminarDatos(id) {
  //obtengo los items de mi "base de datos"
  let miArray = JSON.parse(localStorage.getItem("dataItems"))
  //busco la posicion del item que quiero eliminar
  let indexEnArray = miArray.findIndex(element => element.id === id)
  //elimino el elemento de esa posicion
  miArray.splice(indexEnArray, 1)
  //convierto el objeto a JSON
  let arrayJSON = JSON.stringify(miArray);
  //guardo mi array de transaccion en formato JSON en el localstorage
  localStorage.setItem("dataItems", arrayJSON);
  window.location.reload();
}

//Funcion para guardar elemento en el array de localstorage

function guardarDatos(objeto) {
  let miArray = JSON.parse(localStorage.getItem("dataItems")) || [];
  miArray.push(objeto);
  let arrayJSON = JSON.stringify(miArray);
  localStorage.setItem("dataItems", arrayJSON);
}

//Pizarra

function pizarra() {
  let variablePizarra = document.getElementById("pizarra");
  variablePizarra = window.location.href = "main.html";
}

//Funcion para mostrar y ocultar diferentes secciones de la pagina

let datos = document.querySelector("#datos");
let tabla = document.querySelector("#tabla-base");
let filas = document.querySelector("#tabla");
let tituloGraficos = document.querySelector("#titulo-graf");
let secciones = document.querySelector("#seccion-categorias");
let titulo = document.querySelector("#titulo-cat");
let chart = document.querySelector("#graficos-chart");

function ocultarElementosGraficos() {
  datos.style.display = "none";
  tabla.style.display = "none";
  filas.style.display = "none";
  tituloGraficos.style.display = "block";
  titulo.style.display = "none";
  secciones.style.display = "none";
  chart.style.display = "flex";
}

function ocultarElementos() {
  datos.style.display = "none";
  tabla.style.display = "none";
  filas.style.display = "none";
  secciones.style.display = "flex";
  titulo.style.display = "block";
  tituloGraficos.style.display = "none";
  chart.style.display = "none";
}

function mostrarElementos() {
  datos.style.display = "block";
  tabla.style.display = "table";
  filas.style.display = "table";
  secciones.style.display = "none";
  titulo.style.display = "none";
  tituloGraficos.style.display = "none";
  chart.style.display = "none";
}

function mostrarElementosInicioMD() {
  tabla.style.display = "table";
  filas.style.display = "table";
  secciones.style.display = "none";
  titulo.style.display = "none";
  tituloGraficos.style.display = "none";
  chart.style.display = "none";
}

function mostrarElementosInicioWD() {
  datos.style.display = "block";
  tabla.style.display = "table";
  filas.style.display = "table";
  secciones.style.display = "none";
  titulo.style.display = "none";
  tituloGraficos.style.display = "none";
  chart.style.display = "none";
}

//FUNCION BOTON "SALIR"

function salir() {
  let variableSalir = document.getElementById("salir");
  variableSalir = window.location.href = "index.html";
}