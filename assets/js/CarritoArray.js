let carritoArray = [];
class Producto {
  constructor(id, titulo, precio, cantidad) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  agregarProductoArray(id, titulo, precio, cantidad) {
    let productoBuscado = carritoArray.find((item) => item.id === id);
    if (productoBuscado) {
      productoBuscado.cantidad += cantidad;
    } else {
      carritoArray.push(new Producto(id, titulo, precio, cantidad));
    }
    console.log("el producto se agrego al carrito");
  }

  sumarProductoArray(id) {
    let productoBuscado = carritoArray.find((item) => item.id === id);
    if (productoBuscado) {
      productoBuscado.cantidad++;
      console.log("el producto se agrego al carrito");
    } else {
      console.log("el producto no existe en el carrito");
    }
  }

  restarProductoArray(id) {
    let productoBuscado = carritoArray.find((item) => item.id === id);
    if (productoBuscado) {
      if (productoBuscado.cantidad === 1) {
        carrito = carrito.filter((item) => item.id === id);
      } else {
        productoBuscado.cantidad--;
      }
      console.log("el producto se resto al carrito");
    } else {
      console.log("el producto no existe en el carrito");
    }
  }

  eliminarProductoArray(id) {
    let productoBuscado = carritoArray.find((item) => item.id === id);
    if (productoBuscado) {
      carritoArray = carritoArray.filter((item) => item.id === id);
      console.log("el producto se elimino correctamente");
    } else {
      console.log("el producto no existe en el carrito");
    }
  }

  mostrarCarritoArray() {
    carritoArray.forEach((producto) => {
      console.log(
        `Producto ID: ${producto.id}, titulo ${producto.titulo}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`
      );
    });
  }
}

export default Producto;