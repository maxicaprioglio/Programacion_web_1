import { Producto } from "./Producto.js";
export class Carrito {
  constructor() {
    this.productos = [];
  }

  AgregarProducto(producto) {
    if (producto instanceof Producto) {
      if (this.productos.some((objeto) => objeto.id === producto.id)) {
        const productoBuscado = this.productos.find(
          (objeto) => objeto.id === producto.id
        );
        productoBuscado.cantidad += producto.cantidad;
        console.log("el producto se sumo al carrito");
      } else {
        this.productos.push(producto);
        console.log("el producto se agrego al carrito");
      }
    }
  }

  DescontarProducto(id) {
    const productoBuscado = this.productos.find((objeto) => objeto.id === id);
    if (productoBuscado) {
      if (productoBuscado.cantidad === 1) {
        this.productos = this.productos.filter((item) => item.id !== id);
        console.log("El producto se elimino");
      } else {
        productoBuscado.RestarProducto();
        console.log("El producto se restó al carrito");
      }
    } else {
      console.log("El producto no existe en el carrito");
    }
  }

  EliminarProducto(id) {
    const productoBuscado = this.productos.find((item) => item.id === id);
    if (productoBuscado) {
      this.productos = this.productos.filter((item) => item.id !== id);
      console.log("El producto se eliminó correctamente");
    } else {
      console.log("El producto no existe en el carrito");
    }
  }

  MostrarProductos() {
    console.log(this.productos);
  }
}
