class CarritoCompra {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  aplicarDescuento(descuento) {
    return this.calcularTotal() * (1 - descuento);
  }

}

module.exports = CarritoCompra;