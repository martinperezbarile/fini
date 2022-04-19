// SELECCION DE IDIOMA => ESPAÑOL

dayjs.locale("es");

//FUNCION MOSTRAR FECHA

let fechaContainer = document.getElementById('texto');
const fecha = dayjs().format('MMMM DD - YYYY');

fechaContainer.textContent = fecha;