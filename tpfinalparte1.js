let Pantalla
let botón1
let botón2
let imagen1
let imagen2
let imagen3
let imagen4
let imagen5
let Inicio
let Creditos
function preload() {
imagen1 = loadImage ("./Assets/01.jpg");
imagen2 = loadImage ("./Assets/02.jpg");
imagen3 = loadImage ("./Assets/03.jpg");
imagen4 = loadImage ("./Assets/04.jpg");
imagen5 = loadImage ("./Assets/05.jpg");
Inicio = loadImage ("./Assets/Inicio.jpg");
Creditos = loadImage ("./Assets/Creditos.jpg");
}

function setup() {
  createCanvas(640, 480);
  background (100);
  Pantalla = 0;
  Botón1 = mouseX > width*0.7 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
  Botón2 = mouseX > width*0.02 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
}


function draw() {
  if (Pantalla == 0){
    image(Inicio, 0, 0, width, height);
    push();
    fill (0, 255, 0);
    rect(width*0.7, height*0.8, 180,  80);
    pop();
    push();
    fill (255, 0, 0);
    rect(width*0.02, height*0.8, 180, 80);
    }
}
