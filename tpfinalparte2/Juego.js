class Juego {
  constructor(cantidadNotas) {  //si le pasas cantidad te dibuja las notas

    this.cantidadNotas = cantidadNotas;  //hace que el numero se le asigne a un this

    this.crearNotas();    //llama a crear notas

    this.crearPersonaje(); //llama a crear personaje
    
    this.crearPuntuacion(); //llama a crear puntuacion
    
    this.estado = 0;        //existen estados y son 0

    this.tiempoInicial = 0; //existe tiempo inicial y es 0

    this.tiempoLimite = 3000; //existe tiempo límite y es 3000
    
  }


  dibujar() {
    this.Puntuacion.dibujar(); //pide el dibujar de puntuacion
    this.Personaje.dibujar();  //pide el dibujar de personaje
    for (let i=0; i< this.cantidadNotas; i++) {   //ciclo for para hacer más de una nota con la misma info
      this.notas[i].dibujar();
      this.notas[i].mover();
    }

  }

  actualizar() {   // Cambia de estado la pantalla
    if (this.estado==0) {
      this.pantallaInicio();
    }
    this.evaluarColisiones();
  }

  evaluarColisiones() {     //evalua distancia entre nota y pj para sumar puntos
    for ( let n=0; n < this.cantidadNotas; n++) {
      let nota = this.notas[n];

      let dis = dist(nota.posX, nota.posY, this.Personaje.posX, this.Personaje.posY);
      if (dis< nota.tam/2+this.Personaje.tam/2) {
        nota.reiniciarMovimiento(true)
          this.Puntuacion.puntos+= 1;
      }
    }
  }
  pantallaInicio () {
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("TOCÁ LA MELODIA PARA DORMIR A CERBERO!!", width/2, height/3)
      pop();
     push();
     textSize(15);
     textAlign(CENTER);
     text(" Usá <-  y  -> para moverte entre carriles. \ntocá las suficientes notas antes de que se acabe el tiempo", width/2, height/2);
     pop();
  }

  iniciar() { //setea los valore iniciales por si cambiaron y pasa a estado 1
    this.tiempoInicio = millis();
    this.Puntuacion.puntos = 0;
    this.estado = 1;
  }
//i*130   
 crearNotas() {    // funcion para crear las notas
 this.notas = [];
 for (let i=0; i< this.cantidadNotas; i++) {
 this.notas[i] = new Nota(20); // crea las notas con ciclo for y pasa datos para su ubicacion
 }
 }
 
crearPersonaje() { //funcion para crear personajes
  this.Personaje = new Personaje(width/2, 400);  //crea y pasa info de su ubicacion
}
crearPuntuacion(){
  this.Puntuacion = new Puntuacion(width*0.4, 20);
}

accion() {
  if ( this.estado == 0){
    this.iniciar();
  } else if ( this.pantallaGanaste || this.pantallaPerdiste){
    this.iniciar();
  }
}

personajeGanaste() {
  if (this.Puntuacion.puntos === 10 && this.tiempo === this.tiempoLimite) { 
    pantallaGanaste();
  } else if (this.Puntuacion.puntos < 10 && this.tiempo === this.tiempoLimite) {
    pantallaPerdiste();
  }
}
teclaPresionada(keyCode){
  this.Personaje.teclaPresionada(keyCode); //le dice a personaje la tecla especial que se presiona
}
pantallaGanaste() {
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("FELICITACI...", width/2, height/3)
      pop();
     push();
     textSize(10);
     textAlign(CENTER);
     text(" felicitaciones, Cerbero está dormido!! \nHaz click para reiniciar", width/2, height/2);
     pop();
  }
pantallaPerdiste(){
    background (0, 200, 0);
    push()
      textSize(20);
    textAlign(CENTER, CENTER);
    text("ESA NO LE GUSTÓ, DEBERIAS CORRER!!", width/2, height/3)
      pop();
     push();
     textSize(15);
     textAlign(CENTER);
     text("Haz click para reiniciar", width/2, height/2);
     pop();
}
}
