let pantalla = document.getElementById("pantalla");

let numeroActual = "";
let numeroAnterior = "";
let operador = "";

function agregarNumero(numero) {
    if (numeroActual === "0") {
        numeroActual = numero;
    } else {
        numeroActual += numero;
    }

    pantalla.value = numeroActual;
}

function elegirOperador(op) {
    if (numeroActual === "") return;

    numeroAnterior = numeroActual;
    numeroActual = "";
    operador = op;
}

function calcular() {
    let num1 = Number(numeroAnterior);
    let num2 = Number(numeroActual);
    let resultado = 0;

    if (operador === "+") {
        resultado = num1 + num2;
    } else if (operador === "-") {
        resultado = num1 - num2;
    } else if (operador === "*") {
        resultado = num1 * num2;
    } else if (operador === "/") {
        if (num2 === 0) {
            pantalla.value = "Error";
            return;
        }

        resultado = num1 / num2;
    }

    pantalla.value = resultado;
    numeroActual = resultado.toString();
    numeroAnterior = "";
    operador = "";
}

function limpiar() {
    numeroActual = "";
    numeroAnterior = "";
    operador = "";
    pantalla.value = "0";
}

function borrarNumero() {
    numeroActual = numeroActual.slice(0, -1);

    if (numeroActual === "") {
        pantalla.value = "0";
    } else {
        pantalla.value = numeroActual;
    }
}