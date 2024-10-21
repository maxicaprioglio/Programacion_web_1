class FormularioServicio {
  constructor(
    nombre,
    email,
    ubicacion,
    cantidad,
    entrada,
    parrilla,
    vegetariano,
    pescados,
    minutas,
    pizzas,
    message
  ) {
    this.nombre = nombre;
    this.email = email;
    this.ubicacion = ubicacion;
    this.cantidad = cantidad;
    this.entrada = entrada;
    this.parrilla = parrilla;
    this.vegetariano = vegetariano;
    this.pescados = pescados;
    this.minutas = minutas;
    this.pizzas = pizzas;
    this.message = message;
  }

  SolicitarDatos() {
    let scope;
    let valorNombre = "";
    do {
      valorNombre = prompt("Ingrese Su nombre: ");
      if (valorNombre == "") {
        alert("Ingrese un valor, intentemos devuetla.");
      }
    } while (valorNombre == "");

    let valorEmail = "";
    do {
      valorEmail = prompt("Ingrese Su mail: ");
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (regex.test(valorEmail)) {
        scope = true;
      } else {
        scope = false;
        alert("No es un mail, intentemos devuelta.");
      }
    } while (!scope);

    let valorUbicacion;
    do {
      valorUbicacion = prompt(
        "Ingrese el numero de su ubicacion: 1 - caba , 2 - norte, 3 - sur, 4 - oeste, 5 - mas de 15km"
      );
      switch (valorUbicacion) {
        case "1":
          valorUbicacion = "caba";
          scope = true;
          break;
        case "2":
          valorUbicacion = "norte";
          scope = true;
          break;
        case "3":
          valorUbicacion = "sur";
          scope = true;
          break;
        case "4":
          valorUbicacion = "oeste";
          scope = true;
          break;
        case "4":
          valorUbicacion = "mas";
          scope = true;
          break;
        default:
          alert("Valor incorrecto, intentemos devuelta");
          scope = false;
          break;
      }
    } while (!scope);

    let valorCantidad;
    do {
      valorCantidad = prompt("Cuantos comensales son:");
      if (valorCantidad === "") {
        alert("No pusiste nada, intentemos devuelta");

        scope = false;
      } else if (isNaN(valorCantidad)) {
        scope = false;
        alert("no es un numero, intentemos devuelta");
      } else {
        valorCantidad = Number(valorCantidad);
        scope = true;
      }
    } while (!scope);

    let valorEntrada = prompt(
      "El servicio viene con: entrada? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorEntrada === "") {
      valorEntrada = false;
    } else {
      valorEntrada = true;
    }

    let valorParrilla = prompt(
      "El servicio viene con: parrilla? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorParrilla === "") {
      valorParrilla = false;
    } else {
      valorParrilla = true;
    }

    let valorVegetariano = prompt(
      "El servicio viene con: Vegetariano? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorVegetariano === "") {
      valorVegetariano = false;
    } else {
      valorVegetariano = true;
    }

    let valorPescados = prompt(
      "El servicio viene con: Pescados? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorPescados === "") {
      valorPescados = false;
    } else {
      valorPescados = true;
    }

    let valorMinutas = prompt(
      "El servicio viene con: Minutas? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorMinutas === "") {
      valorMinutas = false;
    } else {
      valorMinutas = true;
    }

    let valorPizzas = prompt(
      "El servicio viene con: Pizzas? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorPizzas === "") {
      valorPizzas = false;
    } else {
      valorPizzas = true;
    }

    let valorMessage = prompt("Mensaje:");

    let datosFormulario = new FormularioServicio(
      valorNombre,
      valorEmail,
      valorUbicacion,
      valorCantidad,
      valorEntrada,
      valorParrilla,
      valorVegetariano,
      valorPescados,
      valorMinutas,
      valorPizzas,
      valorMessage
    );
    alert("se cargo correctamente");
    return datosFormulario;
  }
  MostrarMensaje() {
    alert(
      "Los datos guardados son: nombre " +
        this.nombre +
        " email " +
        this.email +
        " ubicacion " +
        this.ubicacion +
        " cantidad " +
        this.cantidad +
        " entrada " +
        this.entrada +
        " parrilla " +
        this.parrilla +
        " vegetariano " +
        this.vegetariano +
        " pescados " +
        this.pescados +
        " minutas " +
        this.minutas +
        " pizzas " +
        this.pizzas +
        " message " +
        this.message
    );
  }
}
console.log("bienvenido, le solicitamos datos del formulario!");
let datos = new FormularioServicio().SolicitarDatos();
datos.MostrarMensaje();

// seccion productos y carrito cono Objeto

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

agregarProducto(1, "pastel", 25000, 5);
agregarProducto(2, "Canelones", 30000, 3);
mostrarCarrito();
restarProducto(1);
mostrarCarrito();
sumarProducto(2);
mostrarCarrito();
eliminarProducto(1);

// seccion productos y carrito con array

let carritoArray = [];
class Producto {
  constructor(id, titulo, precio, cantidad) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

function agregarProductoArray(id, titulo, precio, cantidad) {
  let productoBuscado = carritoArray.find((item) => item.id === id);
  if (productoBuscado) {
    productoBuscado.cantidad += cantidad;
  } else {
    carritoArray.push(new Producto(id, titulo, precio, cantidad));
  }
  console.log("el producto se agrego al carrito");
}

function sumarProductoArray(id) {
  let productoBuscado = carritoArray.find((item) => item.id === id);
  if (productoBuscado) {
    productoBuscado.cantidad++;
    console.log("el producto se agrego al carrito");
  } else {
    console.log("el producto no existe en el carrito");
  }
}

function restarProductoArray(id) {
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

function eliminarProductoArray(id) {
  let productoBuscado = carritoArray.find((item) => item.id === id);
  if (productoBuscado) {
    carritoArray = carritoArray.filter((item) => item.id === id);
    console.log("el producto se elimino correctamente");
  } else {
    console.log("el producto no existe en el carrito");
  }
}

function mostrarCarritoArray() {
  carritoArray.forEach(producto=>{
    console.log(
      `Producto ID: ${producto.id}, titulo ${producto.titulo}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`
    );
  });
}
agregarProductoArray(1, "pastel", 25000, 5);
agregarProductoArray(2, "Canelones", 30000, 3);
mostrarCarritoArray();
restarProductoArray(1);
mostrarCarritoArray();
sumarProductoArray(2);
mostrarCarritoArray();
eliminarProductoArray(1);
mostrarCarritoArray();