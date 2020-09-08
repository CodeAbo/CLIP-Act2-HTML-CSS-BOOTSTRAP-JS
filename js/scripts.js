var intentos = 4;
var contenidoAdivinanza = document.querySelector("#adivinanza");
var respuestaUsuario = document.querySelector("#respuestaUsuario");
var respuestaCorrecta = 'viento';
var alertaGanar = document.querySelector("#alertaGanar");
var alertaIncorrecto = document.querySelector("#alertaIncorrecto");
var enviarRespuesta = document.querySelector("#enviarRespuesta");


function cantidadIntentos1() {
    var cantidadIntentos = document.querySelector("#cantidadIntentos strong");
    var elementoIntentos = document.createElement('strong');
    var num = document.createTextNode(intentos);
    elementoIntentos.appendChild(num);
    cantidadIntentos.parentElement.replaceChild(elementoIntentos, cantidadIntentos);
}

cantidadIntentos1();

function adivinanza() {

    if ((respuestaUsuario.value.toLowerCase()) === respuestaCorrecta) {

        alertaIncorrecto.setAttribute('class', 'd-none');
        intentos = 0;
        enviarRespuesta.setAttribute('disabled', '');
        alertaGanar.setAttribute('class', 'd-block alert alert-success my-3');
    } else {
        console.log(respuestaUsuario.value);
        intentos--;

        alertaIncorrecto.setAttribute('class', 'd-block alert alert-warning my-3');

        if (intentos === 2) {
            var contenido = document.createElement('li');
            var texto = document.createTextNode('pista 1 - No es de Percusión');
            contenido.appendChild(texto);
            contenidoAdivinanza.appendChild(contenido);

        } else if (intentos === 1) {
            var contenido = document.createElement('li');
            var texto = document.createTextNode('pista 2 - Puede ser de -Cuerda -Viento -Instrumento electrico');
            contenido.appendChild(texto);
            contenidoAdivinanza.appendChild(contenido);
        } else if (intentos === 0) {
            alertaIncorrecto.setAttribute('class', 'd-block alert alert-danger my-3');
            enviarRespuesta.setAttribute('disabled', '');
        }

    }
    cantidadIntentos1();

}