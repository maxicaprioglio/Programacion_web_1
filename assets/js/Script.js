import { Carrito } from "./Carrito.js";
import { Producto } from "./Producto.js";

// viandas
const productos = new Producto();
const productosContainer = document.getElementById("productos");

async function obtenerDatos() {
  const API_URL = "https://67487dfa5801f51535912443.mockapi.io/Productos";
  const spinner = document.getElementById("spinner");

  spinner.style.display = "block";

  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      return response.json();
    })
    .finally(() => {
      spinner.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerDatos()
    .then((datos) => productos.renderizarProductos(datos))
    .then(() => {
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
    })
    .catch((error) => {
      productosContainer.innerHTML = `
        <li class="list-group-item text-danger">Error: ${error.message}</li>
      `;
    });
});

// carrito
const carrito = new Carrito();

carrito.actualizarCantidadAlCarritoVisual();
carrito.renderizarProductosAlCarrito();

// click a las viandas
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
