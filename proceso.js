function seleccion(persona){
// console.log(persona);

var resulJuego=["empate","ganaste","perdiste"];
var nOpciones=["piedra","papel","tijeras"];
// console.log(nOpciones[persona]);
juego = [
    [0,1,2],
    [2,0,1],   //0=empate  1=ganar 2=perder
    [1,2,0]
];

var compu = Math.floor((Math.random() * 3));
var resultado = juego[compu][persona];

alert ("El jugador ha elegido: "+ nOpciones[persona]+" La computadora ha elegido: "+nOpciones[compu]+" El resultado es: "+resulJuego[resultado]);

}