function dibujargrilla( x , y,  w,  h, cantA, cantB) { //CantA y CantB son los Indices para calcular número de Columna y Fila
  
  for (let a=0; a<cantA; a++) { // Para a en 0 y que sea menor al Indice dado se ejecutará el siguiente for y hará sumatoria
    for (let b=0; b<cantB; b++) { // Para b en 0 y que sea menor al Indice dado se ejecuta y hará sumatoria
    
      let ancho = w/cantA; // Define el ancho tomando la variable dada y dividiendola por el Indice A
      let alto = h/cantB; // Define el alto tomando la variable dada y dividiendola por el Indice B
      
      //Invoco mi función de modulo y paso las variables
      modulo(x+a*ancho, y+b*alto, ancho, alto, b, a);//ejecutará el modulo cada ciclo un poco más corrido en relación a los Indices
    }                                                   
  }
}

//Función de dibujo que se ejecuta en cada ciclo for:
function modulo(x,  y,  w,  h,  cantB, cantA){ //requiere las variables de tamaño y los dos Indices

// Mi modulo serán los circulos de manera individual, por ende:

  push();
 
  noFill();// Sin Relleno
  if ( espar (cantB) & espar (cantA)){ //Si ambos indices son pares (invoco mi función para determinar si es par):
  stroke(R1, G1, 110);
  strokeWeight(Strk1);
  } else if (!espar (cantB) & !espar (cantA)){ //Si ambos indices son impares (invoco y volteo mi función para determinar si es par):
  stroke(53, 134, 110);
  strokeWeight(Strk2);
  } else if (!espar (cantB) & espar (cantA)){ //Si Indice B es Impar e Indice A es par:
  stroke(R2, 173, B2);
  strokeWeight(1.5);
  } else { //Si Indice B es par e Indice A es impar:
  stroke(R2, 173, B2);
  strokeWeight(Strk3);
}
  ellipse( x+w/2, y+h/2, w/2, h/2); //Dibuja mi elipse en el centro del módulo
 
  pop();
}

//Función que NO retorna valor y me ayuda a calcular si es par
 function espar ( num) {
  if ( num%2==0) {
    return true;
  } else {
    return false;
  }
}
