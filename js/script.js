//Variables para llamar formularios

let contenedor = document.querySelector("#form-container");
let formularioSignIn = document.querySelector("#signin");
let formularioLogin = document.querySelector("#login");

//Funcion para ocultar formulario de inicio de sesion y mostrar el de registro

function registrarse() {
    formularioLogin.style.display = "none";
    formularioSignIn.style.display = "block";
}

//Funcion para ocultar formulario de registro y mostrar el de inicio de sesion

function iniciarSesion() {
    formularioLogin.style.display = "block";
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
        window.location="main.html"
    }else {
        result.innerHTML = "Contraseña incorrecta";
    }
}

//Usuario de prueba guardado por defecto

let emailLogin = document.querySelector("#email-login");
let contrasenaLogin = document.querySelector("#password-login");

function iniciarSesionEjemplo() {
    if (emailLogin.value == "coder@house.com" && contrasenaLogin.value == "coderhouse") {
        window.location.href = "main.html";
    }
}
