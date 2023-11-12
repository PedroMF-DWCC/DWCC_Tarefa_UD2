// Táboa de multiplicar do 9
console.log("Tabla de multiplicar del 9:");
for (var i_1 = 1; i_1 <= 10; i_1++) {
    console.log("9 x ".concat(i_1, " = ").concat(9 * i_1));
}
// Mostrar 10 primeros números de la sucesión de Fibonacci
console.log("Los 10 primeros números de Fibonacci:");
var fibonacci = [0, 1];
var i = 0;
while (i < 8) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    i++;
}
fibonacci.forEach(function (el) {
    console.log(el);
});
// Indicar se un número é primo ou non.
console.log("Introducir un número para comprobar si es par:\n");
var numeroString = prompt("Introduce el número:");
if (numeroString !== null) {
    var numero = parseInt(numeroString);
    if (numero % 2 === 0) {
        console.log(numero + " -> Es PAR\n\n");
    }
    else {
        console.log(numero + " -> NO es par\n\n");
    }
}
else {
    console.log("Entrada no válida. Introduce un número.");
}
/*
Crea un programa que pida ao usuario que introduza unha idade e amose a seguinte mensaxe en
función do número introducido:
• 0-12: neno
• 13-18: adolescente
• 19-30: xoven
• 31-64: adulto
• 65-100: xubilado
Controla os casos de erro tamén.
Para gardar un valor do usuario utilizamos o seguinte comando: prompt
Faino con if/else e con switch/case tamén.
*/
console.log("Ejercicio de categorizar por edad:\n\n");
var cadena = "";
var edadString = prompt("Introduce edad:");
if (edadString !== null) {
    var edad = parseInt(edadString);
    if (edad >= 0 && edad <= 100) {
        if (edad >= 0 && edad < 13) {
            cadena = "Neno";
        }
        else if (edad < 19) {
            cadena = "Adolescente";
        }
        else if (edad < 30) {
            cadena = "Xoven";
        }
        else if (edad < 65) {
            cadena = "Adulto";
        }
        else {
            cadena = "Xubilado";
        }
        switch (cadena) {
            case "Neno":
                console.log("Neno\n\n");
                break;
            case "Adolescente":
                console.log("Adolescente\n\n");
                break;
            case "Xoven":
                console.log("Xoven\n\n");
                break;
            case "Adulto":
                console.log("Adulto\n\n");
                break;
            case "Xubilado":
                console.log("Xubilado\n\n");
                break;
        }
    }
    else {
        console.log("La edad no es correcta\n\n");
    }
}
else {
    console.log("Entrada no válida. Introduce una edad.");
}
/*
Tendo en conta que cando desprazamos 1 bit á dereita facemos a división enteira por 2 e cando o
desprazamos á esquerda estamos multiplicando por 2, imprime tamén o resultado das seguintes
operacións empregando desprazamento de bits. Podes mesturar operadores de asignación e tamén
operadores propios de bit a bit.
• 125 / 8
• 40 x 4
• 25 / 2
• 10 x 16
*/
console.log("Operaciones con desplazamiento de bits:\n\n");
console.log("125 >> 3 = " + (125 >> 3));
console.log("125 / 8 = " + (125 / 8));
console.log("40 << 2 = " + (40 << 2));
console.log("40 x 4 = " + (40 * 4));
console.log("25 >> 1 = " + (25 >> 1));
console.log("25 / 2 = " + (25 / 2));
console.log("10 << 4 = " + (10 << 4));
console.log("10 x 16 = " + (10 * 16));
