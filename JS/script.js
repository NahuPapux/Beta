alert ("Welcome to the Piedra, papel o tijera HDP \nQue tán suceptible sos?")

prompt()

var pc;
var movpc;
var usuario;
var movusuario;


function aleatorio(min,max) {
    return Math.random()*(max-min)+min;
}

pc=Math.floor(aleatorio(1,4));

if (pc==1){
    movpc="piedra";
}
if (pc==2){
    movpc="papel";
}
if (pc==3){
    movpc="tijera";
}

usuario=parseInt(prompt("Seleccioná alguna opción, inutil \n 1.Piedra. \n 2.Papel. \n 3.Tijera."));

if (usuario==1){
    movusuario="piedra";
}
if (usuario==2){
    movusuario="papel";
}
if (usuario==3){
    movusuario="tijera";
}

console.log("La PC eligió "+movpc);
console.log("El Usuario eligió "+movusuario);

if (movpc=="piedra" && movusuario=="piedra"){
    res= "Empata2";
}

if (movpc=="piedra" && movusuario=="papel"){
    res= "El papel le gana de forma ilógica a la piedra. Ganaste, que piola...";
}

if (movpc=="piedra" && movusuario=="tijera"){
    res= "La piedra rompio tu tijera de mierda. Perdiste inutil.";
}

if (movpc=="papel" && movusuario=="papel"){
    res= "Empata2";
}

if (movpc=="papel" && movusuario=="piedra"){
    res= "El papel le gana de forma justa a la piedra. Perdiste, sos un infeliz."
}

if (movpc=="papel" && movusuario=="tijera"){
    res= "La tijera masacró cruelmente al papel. Sos el ganador, ¿Pero a que costo?"
}

if (movpc=="tijera" && movusuario=="tijera"){
    res= "Empata2"
}

if (movpc=="tijera" && movusuario=="papel"){
    res= "La tijera pulverizó de forma justa al papel. Perdiste, como siempre..."
}

if (movpc=="tijera" && movusuario=="piedra"){
    res= "La tijera se dejó ganar por que sos discapacitado. Ganaste, bien ahi!"
}


