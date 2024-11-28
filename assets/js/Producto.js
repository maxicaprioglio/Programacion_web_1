export class Producto {
  constructor(id, foto, titulo, descripcion, precio) {
    this.id = id;
    this.foto = foto;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  renderizarProductos(datos) {
    const productosContainer = document.getElementById("productos");
    datos.forEach((producto) => {
      
      const div = document.createElement("div");
      div.className = "tarjeta-viandas";

      div.innerHTML = `
        <img
          src="assets/img/productos/${producto.foto}"
          alt="Imagen del producto"
          width="100%"
          height="auto"
        />
        <h4 class="mt-3">${producto.titulo}</h4>
        <p class="mx-2 mb-1">${producto.descripcion}</p>
        <p class="mx-2 mb-1">$ ${producto.precio} .-</p>
        <button
          class="btn-enviar"
          data-id="${producto.id}"
          data-foto="${producto.foto}"
          data-titulo="${producto.titulo}"
          data-precio="${producto.precio}"
        >
          Comprar
        </button>
      `;

      productosContainer.appendChild(div);
    });
  }
}
