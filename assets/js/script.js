import { Carrito } from "./Carrito.js";
import { Producto } from "./Producto.js";

// viandas
const productos = new Producto();
const productosContainer = document.getElementById("productos");
const carrito = new Carrito();

async function obtenerDatos() {
  const API_URL = "https://67487dfa5801f51535912443.mockapi.io/Productos";
  const spinner = document.getElementById("spinner");

  spinner.style.display = "block";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }
      return await response.json();
  } catch (error) {
    throw error;
  } finally {
    spinner.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerDatos()
    .then((datos) => productos.renderizarProductos(datos))
    .then(() => carrito.agregarClickProductos())
    .catch((error) => {
      productosContainer.innerHTML = `
        <li class="list-group-item text-danger">Error: ${error.message}</li>
      `;
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
