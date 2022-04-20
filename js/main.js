//FUNCION PARA MOSTRAR VENTANA EMERGENTE

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

//FUNCION PARA CARGAR DATOS DE FORMULARIO A TABLA

const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let datosFormulario = new FormData(form);
  let objeto = convertirFormDataAObjeto(datosFormulario);
  console.log(objeto);
  guardarDatos(objeto);
  insertarFilaEnFormulario(objeto);
  form.reset();
})

document.addEventListener("DOMContentLoaded", function (event) {
  let objetoArray = JSON.parse(localStorage.getItem("dataItems"))
  objetoArray.forEach(
    function (elementoArray) {
      insertarFilaEnFormulario(elementoArray)
      localStorage.setItem("cantidadItems", objetoArray);
      console.log("items")
    }
  )
})

//FUNCION QUE ASIGNA ID A ELEMENTO TR (FILA)

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
  let monto = datosFormulario.get("monto");
  let id = obtenerNuevoId();
  return {
    "tipo": tipo,
    "categoria": categoria,
    "nombre": nombre,
    "monto": monto,
    "id": id
  }
}

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
  nuevaCelda.textContent = objeto["monto"];
  nuevaCelda.setAttribute("id", "celda-monto", ["monto"]);
  nuevaCelda.setAttribute("class", "celda-monto", ["monto"]);

  let eliminar = nuevaFilaDeTabla.insertCell(4);
  let botonEliminar = document.createElement("ion-icon");
  botonEliminar.name = "trash-outline";
  botonEliminar.setAttribute("id", "btn-eliminar");
  botonEliminar.setAttribute("onclick", "disminuir();");
  eliminar.appendChild(botonEliminar)

  //FUNCION BORRAR FILA

  //al hacer click en el boton eliminar, "agarra" la fila, luego toma el valor de data-id
  botonEliminar.addEventListener("click", (event) => {
    let fila = event.target.parentNode.parentNode;
    let id = fila.getAttribute("data-id");
    fila.remove()
    eliminarDatos(id);
  })
}

//FUNCION BORRAR ELEMENTO EN EL ARRAY DE LOCALSTORAGE

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
}

//FUNCION GUARDAR ELEMENTO EN EL ARRAY DE LOCALSTORAGE

function guardarDatos(objeto) {
  let miArray = JSON.parse(localStorage.getItem("dataItems")) || [];
  miArray.push(objeto);
  let arrayJSON = JSON.stringify(miArray);
  localStorage.setItem("dataItems", arrayJSON);
}

//FUNCION INCREMENTO Y DECREMENTO DE ITEMS

let inicio = 0;

function aumentar() {
  let cantidad = document.getElementById('cantidad').value = ++
  inicio;
}

function disminuir() {
  let cantidad = document.getElementById('cantidad').value = --
  inicio;
}

//FUNCION SUMA DE BALANCE

/* let montoContainer = document.getElementById('celda-monto');
let balanceContainer = document.getElementById('valor-balance');

console.log(montoContainer.value); */

//FUNCION BOTON "PIZARRA"

let variablePizarra = document.getElementById("pizarra");

function pizarra() {
  variablePizarra = window.location.href = "main.html";
}

//FUNCION BOTON "SALIR"

let variableSalir = document.getElementById("salir");

function salir() {
  variableSalir = window.location.href = "index.html";
}

//FUNCION PARA ANIMAR MENU

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));

//FUNCION PARA LABELS

function ocultarLabel() {
    let labels = document.getElementById('label');
    labels.style.display="none";
}

//FUNCION FETCH 

