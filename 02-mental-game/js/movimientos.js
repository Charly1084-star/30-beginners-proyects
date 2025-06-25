function actualizarCont () {
     var movimientosTexto;
     movimientos++;
     movimientosTexto = movimientos;

     if(movimientos > niveles[nivelActual].movimientosMax || !modoRelax) {
          gameOver();
          return;
     }

     if (movimientos < 10){
          movimientosTexto = "0" + movimientos;
     }
     document.querySelector('#mov').innerText = movimientosTexto;
}

function maxContador() {
     var movMaxTexto = niveles[nivelActual].movimientosMax;
     if (movMaxTexto < 10){
          movMaxTexto = "0" + movMaxTexto;
     }
     document.querySelector('#mov-total').innerText = movMaxTexto;
}