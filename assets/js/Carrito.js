export class Carrito {
  constructor() {
    this.productos = JSON.parse(localStorage.getItem("Carrito")) || [];
  }

  guardar() {
    localStorage.setItem("Carrito", JSON.stringify(this.productos));
  }

  agregar(producto) {
    this.productos.find((p) => p.id === producto.id)
      ? (this.productos = this.productos.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        ))
      : this.productos.push({ ...producto, cantidad: 1 });
    this.actualizarCantidadAlCarritoVisual();
    this.renderizarProductosAlCarrito();
    this.guardar();
    agregarClickBotonesCarrito();
  }

  sumar(id) {
    if (this.productos.find((producto) => producto.id === id)) {
      this.productos = this.productos.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      );
      this.actualizarCantidadAlCarritoVisual();
      this.renderizarProductosAlCarrito();
      this.guardar();
    }
  }

  descontar(id) {
    this.productos = this.productos.filter((producto) => {
      if (producto.id === id) {
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;

          return true;
        }
        return false;
      }
      return true;
    });
    this.actualizarCantidadAlCarritoVisual();
    this.renderizarProductosAlCarrito();
    this.guardar();
  }

  eliminar(id) {
    this.productos = this.productos.filter((producto) => {
      if (producto.id === id) {
        return false;
      }
      return true;
    });
    this.actualizarCantidadAlCarritoVisual();
    this.renderizarProductosAlCarrito();
    this.guardar();
  }

  actualizarCantidadAlCarritoVisual() {
    const carritoVisual = document.getElementById("cantCarrito");
    let cantidadProductos = this.productos.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
    carritoVisual.textContent = cantidadProductos;
  }

  renderizarProductosAlCarrito() {
    const totalCarrito = document.getElementById("total");
    const totalContenedor = document.getElementById("totalContenedor");
    const botonPagar = document.getElementById("botonPagar");
    const productosDelCarrito = document.getElementById("listaCarrito");
 
    let totalVenta = 0;

    productosDelCarrito.innerHTML = "";

    if (this.productos.length !== 0) {
      totalContenedor.classList.add("visible");
      botonPagar.classList.add("visible");
      totalContenedor.classList.remove("ocultar");
      botonPagar.classList.remove("ocultar");
      botonPagar.classList.add("btn");

      this.productos.forEach((producto) => {
        totalVenta += producto.precio * producto.cantidad;
        const fila = document.createElement("tr");
        fila.id = producto.id;
        fila.innerHTML = `
      <th scope="row">
        <img
          src="assets/img/productos/${producto.foto}.png"
          alt="Imagen del producto"
          width="50px"
          height="auto"
        /> 
      </th>
      <td>${producto.titulo}</td>
      <td>${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td class="btn-menos">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus" viewBox="0 0 16 16">
          <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
        </svg>
      </td>
      <td class="btn-mas">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
          <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z"/>
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
        </svg>
      </td>
      <td class="btn-eliminar text-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
      </td>`;
        productosDelCarrito.appendChild(fila);
      });

      totalCarrito.innerHTML = totalVenta;
      this.agregarClickBotonesCarrito();

    } else {
      productosDelCarrito.innerHTML = `<td colspan="5" class="table-active">No hay productos</td>`;
      totalContenedor.classList.remove("visible");
      botonPagar.classList.remove("visible");
      botonPagar.classList.remove("btn");
      totalContenedor.classList.add("ocultar");
      botonPagar.classList.add("ocultar");
    }
  }

  agregarClickBotonesCarrito() {
    const botonesCarritoDescontar = document.querySelectorAll(".btn-menos");
    botonesCarritoDescontar.forEach((boton) => {
      boton.addEventListener("click", () => {
        const id = boton.parentElement.id;
        this.descontar(id);
      });
    });
  
    const botonesCarritoSumar = document.querySelectorAll(".btn-mas");
    botonesCarritoSumar.forEach((boton) => {
      boton.addEventListener("click", () => {
        const id = boton.parentElement.id;
        this.sumar(id);
      });
    });
  
    const botonesCarritoEliminar = document.querySelectorAll(".btn-eliminar");
    botonesCarritoEliminar.forEach((boton) => {
      boton.addEventListener("click", () => {
        const id = boton.parentElement.id;
        this.eliminar(id);
      });
    });
  
    document.getElementById("botonPagar").addEventListener("click", () => {
      Swal.fire({
        title: "Compra",
        text: "A la brevedad nos estaremos comunicando.",
        icon: "success",
        confirmButtonText: "Gracias por su compra",
      });
      localStorage.removeItem("carrito");
    });
  }
}
