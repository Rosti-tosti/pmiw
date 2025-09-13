  //Ruben Dario Zapata 88082/6   - comisión 3 -  url video: https://youtu.be/lUHixU3dFLs
  
  let Refe  //---------------------------Imagen de referencia
  let ModVerti = 7;//---------------Número de columnas
  let ModHoriz = 7; //----------------Número de filas
  let DentrodelTP;//----------------me va a ayudar a determinar si es true o false estar dentro de un área
  let Strk1 = 2.5; //------------------Stroke 1 (me va a ayudar a cambiar el strokeWeight de un módulo)
  let Strk2 = 2.5; //-------------------Stroke 2 
  let Strk3 = 1;
  let R1 = 0; //-------------------------Me ayuda a cambiar uno de los parámetros del RGB en Stroke
  let G1 = 0; //-------------------------""                  ""
  let R2 = 0; //-------------------------""                 ""
  let B2 = 0; //-------------------------""                  ""
  
function preload() {
     Refe = loadImage("./Assets/F_4.jpg");
}
function setup() {
     createCanvas(800, 400);
}


function draw() {
  background(205,35,31);  //Background similar al de referencia
  image(Refe, 0, 0, width/2, height);  //Imagen a la izquierda
  dibujargrilla(400, 0, 400, 400, ModHoriz, ModVerti);  //Invoco mi Variable para dibujar la grilla (for anidado) y paso las variables
  
  DentrodelTP = mouseX > 400 & mouseX < 790 & mouseY > 5 & mouseY < 390; //Declaro el área donde estará el tp
  if (DentrodelTP){ //------------------Si se encuentra dentro del tp entonces mapea mis variables para color en referencia al mouse
  R1 = map(mouseX, 0, width, 0, 255);  
  G1 = map(mouseY, 0, height, 0, 255);
  R2 = map(mouseX, 0, width, 0, 255);
  B2 = map(mouseY, 0, height, 0, 255);
  } else { //--------------------------En caso contrario les da la coloración de la imagen de referencia
    R1 = 53;
    G1 = 143;
    R2 = 73;
    B2 = 144;
  }
  
  if (keyIsPressed){ 
    if(key == 'y' || key == 'Y'){ //----------Si presiono "Y" (en sus dos variantes) :
      Strk1 = calculo((mouseX+mouseY), (ModVerti+ModHoriz)); //Invoca mi función que retorna valor para calcular el stroke en relación al mouse e Indices
      Strk2 = calculo((mouseX+mouseY), (ModVerti+ModHoriz))/2; // Lo mismo pero un stroke menor
      Strk3 = calculo((mouseX+mouseY), (ModVerti+ModHoriz))*1.5; // Lo mismo pero un Stroke Mayor
    } else { //---------------En caso contrario le da el Stroke de la imagen de referencia
      Strk1 = 2.5;
      Strk2 = 2.5;
      Strk3 = 1;
   }
  }
   if (keyIsPressed){
    if(key == 't' || key == 'T'){ //----------Si presiono "T" (en sus dos variantes) :
      ModVerti ++; //--Se le hace sumatoria a ambos Indices para aumentar la grilla en los ciclos For
      ModHoriz ++; //--
      } 
    }
    
  if (ModVerti >= 20 & ModHoriz >= 20){ //-- Si la grilla es de 20 o más, bloquea la grilla en 20 (para evitar romper el dibujo)
    ModVerti = 20;
    ModHoriz = 20;
  }
    
  if (keyIsPressed){ //--Como todo el programa utiliza los Indices para las modificaciones, "R" restaura sus valores originales y resetea todo.
    if(key == 'r' || key == 'R'){
      ModVerti = 7;
      ModHoriz = 7;
    }
  }
}

function calculo(  num1, num2) { //----Función de Calculo que retorna un valor, me ayuda a calcular el tamaño de stroke
    let resultado = (num1+num2)/80; //-- Lo divide por 80 para dar un tamaño manejable 
    return resultado;
 }
