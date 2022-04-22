//obtener una referencia al elemento canvas del DOM
const $grafica1 = document.querySelector("#grafica1");
const $grafica2 = document.querySelector("#grafica2");
//las etiquetas son las porciones de la grafica
const etiquetas1 = ["Trabajo", "Otros"];
const etiquetas2 = ["Transporte", "Servicios", "Alimento", "Deporte", "Alquiler", "Otros"];
//podemos tener varios conjuntos de datos, aca va el ej de uno
const datosIngresos = {
    label: "Ingresos",
    data: [1500, 400], //la data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    //ahora deberia haber tantos background colors como datos
    backgroundColor: [
        'rgba(163,221,283,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(239,181,182,0.2)',
        'rgba(229,112,126,0.2)',
    ],//color de fondo
    borderColor: [
        'rgba(163,221,283,1)',
        'rgba(232,233,161,1)',
        'rgba(239,181,182,1)',
        'rgba(229,112,126,1)',
    ],//color del borde
    borderWidth: 1, //ancho del borde
};
const datosEgresos = {
    label: "Ingresos",
    data: [1500, 400, 2000, 7000, 750, 9000], //la data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    //ahora deberia haber tantos background colors como datos
    backgroundColor: [
        'rgba(123,121,283,0.2)',
        'rgba(232,233,161,0.2)',
        'rgba(239,181,182,0.2)',
        'rgba(29,212,126,0.2)',
        'rgba(253,33,162,0.2)',
        'rgba(139,202,236,0.2)',
    ],//color de fondo
    borderColor: [
        'rgba(123,121,283,1)',
        'rgba(232,233,161,1)',
        'rgba(239,181,182,1)',
        'rgba(29,212,126,1)',
        'rgba(253,33,162,1)',
        'rgba(139,202,236,1)',
    ],//color del borde
    borderWidth: 1, //ancho del borde
};
let graficoUno = new Chart($grafica1, {
    type: 'pie', //tipo de grafica
    data: {
        labels: etiquetas1,
        datasets: [
            datosIngresos,
            //aca van mas datos
        ]
    },
});
let graficoDos = new Chart($grafica2, {
    type: 'pie', //tipo de grafica
    data: {
        labels: etiquetas2,
        datasets: [
            datosEgresos,
            //aca van mas datos
        ]
    },
});