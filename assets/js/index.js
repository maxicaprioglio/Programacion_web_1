import { Carrito } from "./Carrito.js";
import { Producto } from "./Producto.js";
import { FormularioServicio } from "./FormularioServicio.js";

const carrito = new Carrito();
const producto1 = new Producto(1,"imagen01.jpg" ,"pastel", "Un pastel enorme con todo lo que se necesita",25000, 5);
const producto2 = new Producto(2,"imagen01.jpg" ,"pastel", "Un pastel enorme con todo lo que se necesita",25000, 5);


carrito.AgregarProducto(producto1);
carrito.MostrarProductos();
carrito.AgregarProducto(producto2);
carrito.MostrarProductos();
carrito.AgregarProducto(new Producto(1,"imagen01.jpg" ,"pastel", "Un pastel enorme con todo lo que se necesita",25000, 5));
carrito.MostrarProductos();
carrito.DescontarProducto(2);
carrito.MostrarProductos();
carrito.DescontarProducto(2);
carrito.MostrarProductos();
carrito.DescontarProducto(2);
carrito.MostrarProductos();
carrito.DescontarProducto(2);
carrito.MostrarProductos();
carrito.DescontarProducto(2);
carrito.MostrarProductos();
carrito.EliminarProducto(2);
carrito.MostrarProductos();
carrito.EliminarProducto(1);
carrito.MostrarProductos();

console.log("bienvenido, le solicitamos datos del formulario!");
let datos = new FormularioServicio().solicitarDatos();
datos.mostrarDatos();
