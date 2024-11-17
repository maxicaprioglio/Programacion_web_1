import { Carrito } from "./Carrito.js";
import { Producto } from "./Producto.js";
import { FormularioServicio } from "./FormularioServicio.js";

const carrito = new Carrito();
const producto1 = new Producto(1,"imagen01.jpg" ,"pastel", "Un pastel enorme con todo lo que se necesita",25000, 5);
const producto2 = new Producto(2,"imagen01.jpg" ,"pastel", "Un pastel enorme con todo lo que se necesita",25000, 5);


carrito.agregarProducto(producto1);
carrito.mostrarProductos();
carrito.agregarProducto(producto2);
carrito.mostrarProductos();
carrito.agregarProducto(new Producto(1,"imagen01.jpg" ,"pastel", "Un pastel enorme con todo lo que se necesita",25000, 5));
carrito.mostrarProductos();
carrito.descontarProducto(2);
carrito.mostrarProductos();
carrito.descontarProducto(2);
carrito.mostrarProductos();
carrito.descontarProducto(2);
carrito.mostrarProductos();
carrito.descontarProducto(2);
carrito.mostrarProductos();
carrito.descontarProducto(2);
carrito.mostrarProductos();
carrito.eliminarProducto(2);
carrito.mostrarProductos();
carrito.eliminarProducto(1);
carrito.mostrarProductos();

console.log("bienvenido, le solicitamos datos del formulario!");
let datos = new FormularioServicio().solicitarDatos();
datos.mostrarDatos();
