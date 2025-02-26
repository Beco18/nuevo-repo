const CarritoCompra = require('./index');

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test('Debería agregar un producto', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
    expect(carrito.productos.length).toBe(1);
  });

  test('Debería calcular el total', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
    expect(carrito.calcularTotal()).toBe(300);
  });

  test('Debería aplicar un descuento', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
    expect(carrito.aplicarDescuento(0.1)).toBe(270);
  });
});
