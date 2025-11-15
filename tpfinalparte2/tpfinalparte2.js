/* Comisión 3 - David Beoian - Cristobal Teruel legajo:122920/1 - Ruben Dario Zapata legajo 88082/6
link video de Ruben Dario Zapata: https://youtu.be/I5lY_g4OTwY
link video de Cristobal Teruel: 
*/


let objJuego;
let sonido1;
let sonido2;
let imgPantallas = [];
let imgPantallasJPG = [];
function preload() {
  for (let i = 0; i <= 4; i++) {
    imgPantallas[i] = loadImage("./Assets/img_0" + i + ".png");
  }
  for (let a = 0; a <= 2; a++) {
    imgPantallasJPG[a] = loadImage("./Assets/img0" + a + ".jpg");
  }
 sonido1 = loadSound("Assets/sonidoA.mp3");
 sonido2 = loadSound("Assets/sonidoB.mp3");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(3);
}


function draw() {
  background(240, 230, 184);
  objJuego.actualizar();
}

function mousePressed() {
  objJuego.accion();
}
function keyPressed() {
  objJuego.teclaPresionada(keyCode);
  if (keyCode == LEFT_ARROW){
    sonido1.pan(-1);
    sonido1.play();
  } else if (keyCode== RIGHT_ARROW){
    sonido2.pan(1);
    sonido2.play();
  }
}
