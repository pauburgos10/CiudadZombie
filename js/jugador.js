/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 7,
  vidas: 10,
  lastDireccion: 'abajo',
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  perderVidas : function (cantVidas){
    this.vidas-= cantVidas;
  },
  avanzar: function (movX, movY, direccion) {    
    this.x += movX;
    this.y += movY;
    this.sprite = "imagenes/auto_rojo_"+ direccion + ".png";
    if (((direccion == 'derecha' || direccion == 'izquierda') &&
      (this.lastDireccion == 'abajo' || this.lastDireccion == 'arriba')) ||
      ((direccion == 'arriba' || direccion == 'abajo') &&
        (this.lastDireccion == 'izquierda' || this.lastDireccion == 'derecha'))) {
      var aux = this.ancho;
      this.ancho = this.alto;
      this.alto = aux;
    }
    this.lastDireccion = direccion;
  }
}
