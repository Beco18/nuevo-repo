class CarritoCompra{
    constructor(){
        this.carrito = [];
    };
    agregarProducto(producto){
        if (producto && producto.nombre && typeof producto.precio === 'number' && producto.precio >= 0) {
            this.carrito.push(producto);
          } else {
            console.error('El producto debe tener un nombre y un precio válido.');
          }
    };

    calcularTotal(){
        return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    };

    aplicarDescuento(porcentaje){
        if (porcentaje >= 0 && porcentaje <= 100) {
            const total = this.calcularTotal();
            const descuento = (total * porcentaje) / 100;
            return total - descuento;
          } else {
            console.error('El porcentaje de descuento debe estar entre 0 y 100.');
            return null;
          }
    };
};
const carrito = new CarritoCompra();

carrito.agregarProducto({ nombre: 'Camisa', precio: 20 });
carrito.agregarProducto({ nombre: 'Pantalón', precio: 50 });
carrito.agregarProducto({ nombre: 'Zapatos', precio: 100 });

console.log('Total sin descuento:', carrito.calcularTotal());

const totalConDescuento = carrito.aplicarDescuento(10); // Aplicar un 10% de descuento
console.log('Total con descuento:', totalConDescuento);


const promesa = new Promise((resolve, reject) =>{

});
console.log(promesa);

module.exports = CarritoCompra;