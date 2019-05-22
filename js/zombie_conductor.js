/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, dir/*parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.dir = dir
}

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if(this.dir === 'v'){
    if(this.y > this.rangoMov.hastaY || this.y < this.rangoMov.desdeY){
      this.velocidad *= -1;
    }
    this.y += this.velocidad;        
  } else {
    if(this.x > this.rangoMov.hastaX || this.x < this.rangoMov.desdeX){
      this.velocidad *= -1;
    }    
    this.x += this.velocidad;       
  }
  
}

ZombieConductor.prototype.atacar = function(jugador){
  jugador.vidas = 0;
}