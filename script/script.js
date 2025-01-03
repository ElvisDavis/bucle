// Imprimir números del 1 al 20 con pares e impares
function imprimirNumeros() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + ' es par');
        } else {
            console.log(i + ' es impar');
        }
    }
}

// Calcular el factorial de un número
function calcularFactorial() {
    let numero = prompt('Ingrese un número para calcular su factorial:');
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    alert('El factorial de ' + numero + ' es: ' + factorial);
}

// Validar si un número es primo
function validarPrimo() {
    let numero = prompt('Ingrese un número para verificar si es primo:');
    let esPrimo = true;
    if (numero <= 1) esPrimo = false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    alert(esPrimo ? numero + ' es primo' : numero + ' no es primo');
}

// Realizar cuenta regresiva desde 10 hasta 1
function cuentaRegresiva() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
    alert('¡Despegue!');
}