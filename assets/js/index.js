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
Producto.agregarProductoArray(1, "pastel", 25000, 5);
Producto.agregarProductoArray(2, "Canelones", 30000, 3);
Producto.mostrarCarritoArray();
Producto.restarProductoArray(1);
Producto.mostrarCarritoArray();
Producto.sumarProductoArray(2);
Producto.mostrarCarritoArray();
Producto.eliminarProductoArray(1);
Producto.mostrarCarritoArray();
