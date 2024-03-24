function resta(a, b) {
    return a - b;
}

console.log(resta(50, 30));

function calcularNota(nota) {
    switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4:
        return "insuficiente";
    case 5:
    case 6:
        return 'Suficiente';
    case 7:
    case 8:
        return 'Notable';
    case 9:
    case 10:
        return 'Sobresaliente';
    default:
        return 'Nota no valida'
}
}
console.log(calcularNota(8));

function calcularNota(nota) {
    switch (true) {
    case nota <= 1 && nota <= 4:
        return "insuficiente";
    case nota <= 5 && nota <= 6:
        return 'Suficiente';
    case nota <= 7 && nota <= 8:
        return 'Notable';
    case nota <= 9 && nota <= 10:
        return 'Sobresaliente';
    default:
        return 'Nota no valida'
}
}
console.log(calcularNota(3.5));


function duplicarNumero(numerito) {
    if (typeof numerito === 'number') {
        return numerito * 2;
    } else {
        return 'Debo ser ejecutada con un numero';
    }
}

console.log(duplicarNumero(5));

function caracterInicial(palabrita) {
    switch (typeof palabrita === 'string') {
        case false:
            return 'Debo der ejecutada con un string'
            case palabrita.length === 0:
            return 'Debo ser ejecutada con un string no vacío'
        case true:
            return palabrita.charAt(0);
    }
}

console.log(caracterInicial('Hola'));

function ultimoCaracter(palabrota) {
    switch (typeof palabrota === 'string') {
        case false:
            return 'Debo der ejecutada con un string'
        case palabrota.length === 0:
            return 'Debo ser ejecutada con un string no vacío'
        case true:
            return palabrota.charAt(palabrota.length -1);
    }
}

console.log(ultimoCaracter('Hola'));

function cuentaCaracteres(miPalabra) {
    switch (typeof miPalabra === 'string') {
        case false:
            return 'Debo ser ejecutado con un string'
        case true:
            let miArr = miPalabra.split('');
            return miArr.length
    }
}

console.log(cuentaCaracteres('supercalifristicespiralidoso'));

function esPalindromo(palabreta) {
    let palabraInvertida = palabreta.split('').reverse(). join('');
    console.log(palabraInvertida);
    switch (typeof palabreta === 'string') {
        case false:
            return 'no es un formato valido'
        case true && palabreta === palabraInvertida:
            return true
        case true && palabreta !== palabraInvertida:
            return false
        default:
            'algo ha fallado'
    }
}

console.log(esPalindromo('palindromo'));


function getPrecioMoostar(precio) {
    switch (typeof precio === 'number') {
        case false:
            return 'no es un formato correcto'
        case true:
            return precio.toFixed(2) + '€';
    }
}

console.log(getPrecioMoostar(90));

function division(a, b) {
    return a / b;
}

console.log(division(20, 5));

let arrNumeros = [];
function mayorQue4(numeros) {
    if (Array.isArray(numeros)) {
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] >= 5) {
                arrNumeros.push(numeros[i]);
            }
        }
    }
}

mayorQue4([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(arrNumeros);

/* function numeroPrimo() {
    let primos = prompt('Introduzca un numero');
    primos = +primos;
    for (let i = 2; i <= Math.sqrt(primos); i++) {
        if (primos % i === 0) {
            console.log(false);
            break;
        } else {
            console.log(true);
            break;
        }
    }
}

numeroPrimo(); */

// Extra

// Crear la función obtenerImpares que acepte como argumento un array de números y devuelva un array con los elementos impares.

let numeroImpares = [];
function obtenerImpares(impares) {
    if (Array.isArray(impares)) {
        for (let i = 0; i < impares.length; i++) {
            if (impares[i] % 2 !== 0) {
                numeroImpares.push(impares[i]);
            }
        }
    }
}

obtenerImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(numeroImpares);

// Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6.

function sumarArray(sumita) {
    let acumuladorSumita = 0;
    if (Array.isArray(sumita)) {
        for (let i = 0; i < sumita.length; i++) {
            acumuladorSumita += sumita[i];
            
        }
    console.log(acumuladorSumita);
    }
}

sumarArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 5]);

// Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 2

function multiplicarArray(multiplicar) {
    let acumuladormultiplicar = 1;
    if (Array.isArray(multiplicar)) {
        for (let i = 0; i < multiplicar.length; i++) {
            acumuladormultiplicar *= multiplicar[i];
            
        }
    console.log(acumuladormultiplicar);
    }
}

multiplicarArray([2, 3, 4]);

// Crea una función checkPassword con una variable tipo string que contenga una contraseña cualquiera. Después, se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes, ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena” (ej. un alert). Piensa bien en la condición de salida (3 intentos y, si acierta, sale aunque le queden intentos).

function checkPassword() {
    const password1 = 'hola1';
    for (let i = 0; i < 3; i++) {
        let password2 = prompt('Introduce la contraseña');
        if (password1 === password2) {
            i = 3;
            console.log('Contraseña correcta!');
            alert('Enhorabuena')
        } else {
            alert('contraseña incorrecta')
        }
    }
}

checkPassword();
