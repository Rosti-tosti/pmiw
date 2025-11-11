class Nota {   //notas que van a caer 
     constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255,0,0);  //color rojo
    this.vida = 1;
   }
  dibujar(){
      push();
      fill(this.miColor);
      ellipse(this.posX, this.posY, 50, 50);  //notas de 50x50 (ni idea, solo placeholder)
      pop();
  }
  
  mover(){
  }
  
  estaVivo(){
  }
}
