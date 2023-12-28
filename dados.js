jugar = function(){
    let aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if (aleatorio > 3) {
        console.log("GANASTE");
        cambiarTexto("lblResultado", "GANASTE");
    }else{
        console.log("PERDISTE");
        cambiarTexto("lblResultado", "PERDISTE");
    }
}
lanzarDado = function(){
    let aleatorio = Math.random();
    let numeroMultiplicado = aleatorio * 6;
    let numeroEntero = parseInt(numeroMultiplicado);
    let valorDado = numeroEntero + 1; //valor entre 1-6
    console.log(valorDado);
    return valorDado;
}