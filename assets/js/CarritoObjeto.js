let carrito = {};

function agregarProducto(id, titulo, precio, cantidad) {
  if (carrito[id]) {
    carrito[id].cantidad += cantidad;
  } else {
    carrito[id] = {
      titulo: titulo,
      precio: precio,
      cantidad: cantidad,
    };
  }
  console.log("el producto se agrego al carrito");
}

function sumarProducto(id) {
  if (carrito[id]) {
    carrito[id].cantidad++;
    console.log("el producto se agrego al carrito");
  } else {
    console.log("el producto no existe en el carrito");
  }
}

function restarProducto(id) {
  if (carrito[id]) {
    if (carrito[id].cantidad == 1) {
      delete carrito[id];
    } else {
      carrito[id].cantidad--;
    }
    console.log("el producto se desconto correctamente");
  } else {
    console.log("el producto no existe en el carrito");
  }
}

function eliminarProducto(id) {
  if (carrito[id]) {
    delete carrito[id];
    console.log("el producto se elimino correctamente");
  } else {
    console.log("el producto no existe en el carrito");
  }
}

function mostrarCarrito() {
  console.log("Carrito de compras:");
  for (let id in carrito) {
    let producto = carrito[id];
    console.log(
      `Producto ID: ${id}, titulo ${producto.titulo}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`
    );
  }
}

export default {
  agregarProducto,
  sumarProducto,
  restarProducto,
  eliminarProducto,
  mostrarCarrito
};
