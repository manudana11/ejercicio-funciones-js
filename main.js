function resta (a, b) {
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

console.log(ultimoCaracter(''));

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