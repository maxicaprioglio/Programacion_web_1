import { Carrito } from "./Carrito.js";
import { Producto } from "./Producto.js";

// viandas
const carrito = new Carrito();

carrito.actualizarCantidadAlCarritoVisual();
carrito.renderizarProductosAlCarrito();

/* click a las viandas */
const botones = document.querySelectorAll(".btn-enviar");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const producto = new Producto(
      boton.dataset.id,
      boton.dataset.foto,
      boton.dataset.titulo,
      boton.dataset.precio
    );
    carrito.agregar(producto);
  });
});

// formulario servicios

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  let data = [];
  for (let [key, value] of formData.entries()) {
    data.push(key, value);
  }
  Swal.fire({
    title: "Formulario enviado",
    text: "A la brevedad le estaremos respondindo.",
    icon: "success",
    confirmButtonText: "Gracias",
  });
  console.log(data);
  // aca hay que hacer un fetch y mandarlo a algun lado
  event.target.reset();
});
