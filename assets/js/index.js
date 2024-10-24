import { FormularioServicio } from "./FormularioServicio.js";
import {
  agregarProducto,
  sumarProducto,
  restarProducto,
  eliminarProducto,
  mostrarCarrito,
} from "./CarritoObjeto.js";
import { Producto } from "./CarritoArray.js";

console.log("bienvenido, le solicitamos datos del formulario!");
let datos = new FormularioServicio().SolicitarDatos();
datos.MostrarMensaje();

//usamos el carrito objeto
agregarProducto(1, "pastel", 25000, 5);
agregarProducto(2, "Canelones", 30000, 3);
mostrarCarrito();
restarProducto(1);
mostrarCarrito();
sumarProducto(2);
mostrarCarrito();
eliminarProducto(1);

//usamos el carrito Array
const carrito = new Producto();
carrito.agregarProductoArray(1, "pastel", 25000, 5);
carrito.agregarProductoArray(2, "Canelones", 30000, 3);
carrito.mostrarCarritoArray();
carrito.restarProductoArray(1);
carrito.mostrarCarritoArray();
carrito.sumarProductoArray(2);
carrito.mostrarCarritoArray();
carrito.eliminarProductoArray(1);
carrito.mostrarCarritoArray();
