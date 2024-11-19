import {
  agregarClickBotonesEnviar,
  agregarClickBotonesSumar,
  agregarClickBotonesRestar,
} from "./buttonActions.js";

import { cargarCantCarrito, cargarProductosTabla } from "./Carrito.js";

// viandas
cargarCantCarrito();
agregarClickBotonesEnviar();
cargarProductosTabla(JSON.parse(localStorage.getItem("carrito")) ?? []);
agregarClickBotonesRestar();
agregarClickBotonesSumar();

// formulario servicios

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  let data = [];
  for (let [key, value] of formData.entries()) {
    data.push(key, value);
  }
  console.log(data);
  // aca hay que hacer un fetch y mandarlo a algun lado
});
