
let ref= true; // referencia visual de numero de pantalla para nosotros
let imagen = [];//declaracion de arreglo para imagenes

let Pantalla
  let imagen1
  let imagen2
  let imagen3
  let imagen4
  let imagen5
  let Inicio
  let Creditos


  function preload() {
  for ( let i = 0; i < 19; i++) {      // 18 pantallas + creditos 
    imagen[i] = loadImage ("./Assets/"+nf(i, 2)+".jpg");// carga las imagenes y "nf" ajusta el valor de i a solo 2 caracteres
  }
}

function setup() {
  createCanvas(640, 480);
  background (100);
  Pantalla = 0;
  //Botón1 = mouseX > width*0.7 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
  //Botón2 = mouseX > width*0.02 & mouseX< width-20 & mouseY> height*0.8 & mouseY < height-20 ;
}


function draw() {
  if (Pantalla == 0) {                     // Inicio 
    image(imagen[00], 0, 0, width, height);
    Evento( "haz Click para iniciar" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 1) {              // presentación (Solo Orfeo + Narracion)
    image(imagen[01], 0, 0, width, height)
    Evento( "\nOrfeo, luego de la muerte de su esposa, \ndecide bajar al inframundo a rescatarla" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 2) {              // presentación (Hades y Orfeo + Dialogo/Narrador)
    image(imagen[02], 0, 0, width, height)
    Evento( "\nHades le propone atravezar el inframundo de \nla mano de su amada pero sin mirar para atras" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 3) {
    image(imagen[03], 0, 0, width, height) // primer bifurcación 
    dibujarBoton("Caminar", width/15, height-height/4, width*0.4, height*0.2 );
    colicionesRect(0, 0, width, height);
    dibujarBoton("Mirar para atras", 8*width/15 , height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 4) {   
    image(imagen[04], 0, 0, width, height)
    Evento( "Ves a Hades disfrazandose de tu esposa..." ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 5) {
    image(imagen[05], 0, 0, width, height)
    Evento( "Cruzas el tártaro pero un gigante, criatura engañosa, te llama" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 6) {
    image(imagen[06], 0, 0, width, height)
    dibujarBoton("escuchar", width/15, height-height/4, width*0.4, height*0.2 );
    colicionesRect(0, 0, width, height);
    dibujarBoton("no escuchar", 8*width/15 , height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 7) {
    image(imagen[07], 0, 0, width, height)
    Evento( "Linda Lira, sería buena forma de mimir al chucho" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 8) {
    image(imagen[08], 0, 0, width, height)
    Evento( "\nCruzas los campos Eliseos y un perro gigante de \n3 cabezas hace que caigas de la sorpresa" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 9) {
    image(imagen[09], 0, 0, width, height)
    dibujarBoton("lira vieja", width/15, height-height/4, width*0.4, height*0.2 );
    colicionesRect(0, 0, width, height);
    dibujarBoton("espada de oro", 8*width/15 , height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 10) {
    image(imagen[10], 0, 0, width, height)
    Evento( "Tocas una dulce melodía que duerme al perro y te deja cruzar sin problemas" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 11) {
    image(imagen[11], 0, 0, width, height)
    Evento( "Intentas utilizar la espada... Cerbero decide usarte como pelota de juguete" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 12) {
    image(imagen[12], 0, 0, width, height)
    Evento( "Llegas al río estigia, justo adelante reconoces la figura de un barco" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 13) {
    image(imagen[13], 0, 0, width, height)
    Evento( "\nCaronte nota que no tenés Ovolos pero \npermitira que viajes si lo vences bailando" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 14) {
    image(imagen[14], 0, 0, width, height)
    dibujarBoton("Bailas despacito", width/15, height-height/4, width*0.4, height*0.2 );
    colicionesRect(0, 0, width, height);
    dibujarBoton("Bailas Wachiturro", 8*width/15 , height-height/4, width*0.4, height*0.2 );
  } else if (Pantalla == 15) {
    image(imagen[15], 0, 0, width, height)
    Evento( "Caronte te deja salir del inframundo con tu esposa a tu lado" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 16) {
    image(imagen[16], 0, 0, width, height)
    Evento( "Caronte decide ahogarse antes que seguir viendo... te quedas atrapado" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 17) {
    image(imagen[17], 0, 0, width, height)
    Evento( "Fin de la Aventura - Click para reiniciar" ,width/15, height-height/4 , width*0.85, height*0.2 );
  } else if (Pantalla == 18) {
    image(imagen[18], 0, 0, width, height)
    Evento( "Cristobal Teruel - Darío Zapata" ,width/15, height-height/4 , width*0.85, height*0.2 );
  }





  //NUMERO DE ARRIBA A LA IZQUIERDA
  if (ref) {
    push();
    fill (0, 255, 0);
    textAlign(LEFT);
    text("Pantalla:"+ Pantalla, 20, 20);
    pop();
  }
}


//Altera los valores de pantalla con eventos del m
function mousePressed () {
  if (Pantalla === 0) {
    Pantalla = 1;
  } else if (Pantalla === 1 /*&& (colicionesRect) === true*/) {
    Pantalla = 2;
  } else if (Pantalla === 2) {
    Pantalla = 3;
  } else if (Pantalla === 3) {
    Pantalla = 4;
  } else if (Pantalla === 4) {
    Pantalla = 5;
  } else if (Pantalla === 5) {
    Pantalla = 6;
  } else if (Pantalla === 6) {
    Pantalla = 7;
  } else if (Pantalla === 7) {
    Pantalla = 8;
  } else if (Pantalla === 8) {
    Pantalla = 9;
  } else if (Pantalla === 9) {
    Pantalla = 10;
  } else if (Pantalla === 10) {
    Pantalla = 11;
  } else if (Pantalla === 11) {
    Pantalla = 12;
  } else if (Pantalla === 12) {
    Pantalla = 13;
  } else if (Pantalla === 13) {
    Pantalla = 14;
  } else if (Pantalla === 14) {
    Pantalla = 15;
  } else if (Pantalla === 15) {
    Pantalla = 16;
  } else if (Pantalla === 16) {
    Pantalla = 17;
  } else if (Pantalla === 17) {
    Pantalla = 18;
  } else if (Pantalla === 18) {
    Pantalla = 0;
  }
}

// && colicionesRect( width*0, 7, height*0.8, 180, 80)===true
