let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function agregarCarrito(producto) {
  if (carrito.find((p) => p.id === producto.id)) {
    carrito = carrito.map((p) =>
      p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarrito(carrito);
  sumarProductoCarrito();
  cargarProductosTabla(carrito);
}

export function sacarCarrito(id) {
  const productoBuscado = carrito.find((producto) => producto.id === id);
  if (productoBuscado) {
    if (productoBuscado.cantidad === 1) {
      carrito = carrito.filter((producto) => producto.id !== id);
    } else {
      carrito = carrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      );
    }
    guardarCarrito(carrito);
    restarProductoCarrito();
    cargarProductosTabla(carrito);
  } else {
    console.log("El producto no existe en el carrito");
  }
}

export function sumarProductoTabla(id) {
  if (carrito.find((producto) => producto.id === id)) {
    carrito = carrito.map((producto) =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    );
    guardarCarrito(carrito);
    sumarProductoCarrito();
    cargarProductosTabla(carrito);
  } else {
    console.log("El producto no existe en el carrito");
  }
}

export function guardarCarrito(nuevoCarrito) {
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
}

export function cargarCantCarrito() {
  let cantidadProductos = 0;
  if (carrito !== null) {
    carrito.forEach((p) => {
      cantidadProductos += p.cantidad;
    });
  }
  const cantCarritoContainer = document.getElementById("cantCarrito");
  cantCarritoContainer.textContent = cantidadProductos;
}

export function sumarProductoCarrito() {
  const cantCarritoContainer = document.getElementById("cantCarrito");
  cantCarritoContainer.textContent++;
}

export function restarProductoCarrito() {
  const cantCarritoContainer = document.getElementById("cantCarrito");
  cantCarritoContainer.textContent--;
}

export function cargarProductosTabla(productos) {
  
  const tablaCarrito = document.getElementById("listaCarrito");
  const totalContenedorCarrito = document.getElementById("totalContenedor");
  const totalCarrito = document.getElementById("total");
  let totalVenta = 0;
  totalContenedorCarrito.style.display = "block";
  tablaCarrito.innerHTML = "";

  if (productos.length !== 0) {
    productos.forEach((producto) => {
      totalVenta += producto.precio * producto.cantidad;
      const productoHTML = `
        <tr id="${producto.id}">
          <th scope="row"><img
            src="assets/img/productos/${producto.foto}.png"
            alt="Imagen del producto"
            width="50px"
            height="auto"
          /> </th>
                  <td>${producto.titulo}</td>
                  <td>${producto.precio}</td>
                  <td>${producto.cantidad}</td>
                  <td class="btn-menos">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-minus" viewBox="0 0 16 16">
                    <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
                    </svg>
                    </td>
                  <td class="btn-mas"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-plus" viewBox="0 0 16 16">
                  <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                  </svg>
                  </td>
                </tr>
      `;
      tablaCarrito.insertAdjacentHTML("beforeend", productoHTML);
    });

    totalCarrito.innerHTML = totalVenta;
  } else {
    tablaCarrito.innerHTML = `<td colspan="5" class="table-active">No hay productos</td>`;
    const totalContenedorCarrito = document.getElementById("totalContenedor");
    totalContenedorCarrito.style.display = "none";
  }
}
