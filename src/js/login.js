//Variables para llamar formularios

let welcome = document.querySelector("#welcome");
let formContainer = document.querySelector("#form-container");
let formularioSignIn = document.querySelector("#signin");
let formularioLogin = document.querySelector("#login");

//Funcion para ocultar formulario de inicio de sesion y mostrar el de registro

function registrarse() {
    welcome.style.display = "none";
    formContainer.style.display = "flex";
    formularioLogin.style.display = "none";
    formularioSignIn.style.display = "flex";
}

//Funcion para ocultar formulario de registro y mostrar el de inicio de sesion

function iniciarSesion() {
    welcome.style.display = "none";
    formContainer.style.display = "flex";
    formularioLogin.style.display = "flex";
    formularioSignIn.style.display = "none";
}

// Funciones para loguearse y crear cuenta

function signup(e) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = {
        name: name,
        email: email,
        password: password,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(email, json);
    console.log('Usuario añadido');
}

function loginFunction(e) {
    event.preventDefault();

    let email = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;
    let result = document.getElementById('result');

    let user = localStorage.getItem(email);
    let data = JSON.parse(user);
    console.log(data);

    if(user == null) {
        result.innerHTML = "Email incorrecto"
    }else if (email == data.email && password == data.password){
        window.location="main.html";
    }else {
        result.innerHTML = "Contraseña incorrecta";
    }
}

//Funcion parallax effect

document.addEventListener("mousemove", parallax);

function parallax(e){
    document.querySelectorAll(".effect").forEach(function(move){
        let movimientoValue = move.getAttribute("data-value");
        let x = (e.clientX * movimientoValue) / 250;
        let y = (e.clientY * movimientoValue) / 250;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}