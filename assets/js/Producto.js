export class Producto {
  constructor(id, foto, titulo, descripcion, precio, cantidad) {
    this.id = id;
    this.foto = foto;
    this.descripcion = descripcion;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  SumarProducto() {
    this.cantidad++;
  }

  RestarProducto() {
    this.cantidad--;
  }
}
