// ALERTA INICIAL 

function alertaTutorial() {
    swal.fire({
        title: "¡Bienvenido a FINI!",
        showConfirmButton: false,
        text: "Haz click en el botón + para agregar items",
        footer: "Administra tus finanzas de manera simple, agil e intuitiva",
        timer: 5000,
        timerProgressBar: true,
        backdrop: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        background: "#1a132f",
        color: '#f8f8f8',
        imageUrl: "./src/img/logo-swal.png",
        imageWidth: "4rem"
    });
}

function alertaGraficos() {
    swal.fire({
        text: "¡Sección en construcción!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        backdrop: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        background: "#1a132f",
        color: '#f8f8f8',
        imageUrl: "./src/img/ilustracion2.png",
        imageWidth: "12rem"
    });
    setTimeout(() => {
        window.location = "main.html";
    }, 2000);
}