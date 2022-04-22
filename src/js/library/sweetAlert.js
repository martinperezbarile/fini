// ALERTA INICIAL 

Swal.fire({
    title: "¡Bienvenido a FINI!",
    showConfirmButton: false,
    text: "Haz click en el botón + para agregar items",
    footer: "Administra tus finanzas de manera simple, agil e intuitiva",
    timer: 7000,
    timerProgressBar: true,
    backdrop: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    background: "#1a132f",
    color: '#f8f8f8',
    imageUrl: "./img/logo-fondo.png",
    imageWidth: "4rem"
});

// ALERTA PARA ERRORES 

function alertError() {
    swal.fire({
        title: "Sección en construcción",
        icon: "warning",
        text: "¡Nos encontramos trabajando en esta sección!",
        timer: 7000,
        timerProgressBar: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        background: "#1a132f",
        color: '#f8f8f8'
    });
};