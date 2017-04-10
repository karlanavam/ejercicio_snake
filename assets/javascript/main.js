document.addEventListener("keydown", moveSnake);

var snake = document.getElementById("cuadrito");

var posX = 0;
var posY = 0;
var movimiento = 50;

function moveSnake(evento){
  switch(evento.keyCode){

    case 37: // LEFT
      posX = posX - movimiento;
      if(posX < 0){
        gameOver();
      } else{
        cuadrito.style.marginLeft = posX + "px";
      }
      break;

    case 38: // UP
      posY = posY - movimiento;
      if(posY < 0){
        gameOver();
      } else {
        cuadrito.style.marginTop = posY + "px";
      }
      break;

      case 39: // RIGHT
      posX = posX + movimiento;
      if(posX > 240){
        gameOver();
      }else{
        cuadrito.style.marginLeft = posX + "px";
      }
      break;

    case 40: // DOWN
      posY = posY + movimiento;
      if(posY > 240){
        gameOver();
      } else {
        cuadrito.style.marginTop = posY + "px";
      }
      break;

    default:
      console.log("Just arrows!");
    break;
  }
}

function gameOver(){
  alert("Game over :(");
  document.removeEventListener("keydown", moveSnake);
}

var boton = document.getElementById("reiniciar");
boton.addEventListener("click", reStart);

function reStart(){
  posX = 0;
  posY = 0;
  cuadrito.style.marginTop = posY;
  cuadrito.style.marginLeft = posX;
  document.addEventListener("keydown", moverCuadrito);
}
