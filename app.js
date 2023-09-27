/* 
// Ejercicio 1
let num = parseInt(prompt('Escribe un número'));

let i = 1;

while (i <= num) {
    if (i%5 === 0) {
        alert(i);
        console.log(i);
    }
    i++;
}


// Ejercicio 2
let num2 = parseInt(prompt('Ingresa un numero entre 1 y 50'));
let num3 = parseInt(prompt('Ingresa otro numero enter 1 y 50'));

let j = 1;

while (j <= 50) {
    if(j === num2 || j === num3) {
        console.log(j + ' ¡Lotería!');
    } else {
        console.log(j);
    }
    j++
}


// Ejercicio 3
let nums = null;
const array = [];

while (nums !== 0) {
    nums = parseInt(prompt('ingresa un numero para capturar, para terminar la captura ingresa 0'));
    if (!isNaN(nums) && nums !== 0) {
        array.push(nums);
    }
}
alert(array.join(' | '))


// Ejercicio 4
let words = null;
let concatenation = '';

while (words !== '') {
    words = prompt('ingresa palabra(s) o letra(s) para capturar, para terminar la captura no escribas nada y presiona ENTER');
    if (words !== '') {
        concatenation+=words;
    }
}
alert(concatenation); */


// Ejercicio 5
let dia = null;

while (dia !== 'domingo') {
    dia = prompt('Ingresa un dia de la semana sin acento');
    if (dia === 'lunes') {
        alert('feliz inicio de semana! echale ganas!')
    } else if (dia === 'martes') {
        alert('Excelente martes! con todo el dia de hoy!')
    } else if (dia === 'miercoles') {
        alert('ya es ombligo de semana! animo!')
    } else if (dia === 'jueves') {
        alert('ya es jueves! con toda la actitud!')
    } else if (dia === 'viernes') {
        alert('ya es viernes!! a cerrar al maximo!')
    } else if (dia === 'sabado') {
        alert('sabadito, a disfrutar!')
    } else if (dia === 'domingo') {
        alert('Domingo, ve a descansar')
    }
}


