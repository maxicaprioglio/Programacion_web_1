import { agregarCarrito, sacarCarrito, sumarProductoTabla } from "./Carrito.js";

export function agregarClickBotonesEnviar() {
  const botones = document.querySelectorAll(".btn-enviar");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = {
        id: boton.dataset.id,
        foto: boton.dataset.foto,
        titulo: boton.dataset.titulo,
        precio: boton.dataset.precio,
      };
      agregarCarrito(producto);
      agregarClickBotonesRestar();
      agregarClickBotonesSumar();
    });
  });
}

export function agregarClickBotonesRestar() {
  const botonesCarritoDescontar = document.querySelectorAll(".btn-menos");
  botonesCarritoDescontar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.parentElement.id;
      sacarCarrito(id);
      agregarClickBotonesRestar();
      agregarClickBotonesSumar();
    });
  });
}

export function agregarClickBotonesSumar() {
  const botonesCarritoSumar = document.querySelectorAll(".btn-mas");
  botonesCarritoSumar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = boton.parentElement.id;
      sumarProductoTabla(id);
      agregarClickBotonesRestar();
      agregarClickBotonesSumar();
    });
  });
}

export function agregarBotonPagar() {
  document.getElementById("botonPagar").addEventListener("click", () => {
    Swal.fire({
      title: "Compra",
      text: "A la brevedad nos estaremos comunicando.",
      icon: "success",
      confirmButtonText: "Gracias por su compra",
    });
    //actualizo carrito
    localStorage.removeItem("carrito");
    agregarCarrito(producto);
    agregarClickBotonesRestar();
    agregarClickBotonesSumar();
  });
}
