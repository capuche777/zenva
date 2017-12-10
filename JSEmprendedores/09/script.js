var edad = 99;
var tiempoCarrea = 10;
var esDeportista = false;
var esFumador = true;

console.log(esDeportista && esFumador);
console.log(esDeportista || esFumador);

if (esDeportista && edad > 80) {
    console.log('Gana premio');
} else {
    console.log('Gracias por participar');
}

if (esFumador && edad > 50) {
    console.log ('te vas a morir')
}