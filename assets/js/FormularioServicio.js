export class FormularioServicio {
  constructor(nombre, email, ubicacion, cantidad, servicio, message) {
    this.nombre = nombre;
    this.email = email;
    this.ubicacion = ubicacion;
    this.cantidad = cantidad;
    this.servicio = servicio;
    this.message = message;
  }

  solicitarDatos() {
    const nombre = this.solicitarNombre();
    const email = this.solicitarEmail();
    const ubicacion = this.solicitarUbicacion();
    const cantidad = this.solicitarCantidad();
    const servicio = this.solicitarServicio();
    const message = prompt("Mensaje:");

    let datosFormulario = new FormularioServicio(
      nombre,
      email,
      ubicacion,
      cantidad,
      servicio,
      message
    );
    alert("se cargó correctamente");

    return datosFormulario;
  }

  solicitarNombre() {
    let valorNombre = "";
    do {
      valorNombre = prompt("Ingrese Su nombre: ");
      if (valorNombre == "") {
        alert("Ingrese un valor, intentemos devuetla.");
      }
    } while (valorNombre == "");
    return valorNombre;
  }

  solicitarEmail() {
    let scope;
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
    return valorEmail;
  }

  solicitarUbicacion() {
    let scope;
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
    return valorUbicacion;
  }

  solicitarCantidad() {
    let scope;
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
    return valorCantidad;
  }

  solicitarServicio() {
    const valorServicio = [];
    let valorEntrada = prompt(
      "El servicio viene con: entrada? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorEntrada !== "") {
      valorServicio.push("Entrada");
    }

    let valorParrilla = prompt(
      "El servicio viene con: parrilla? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorParrilla !== "") {
      valorServicio.push("Parrilla");
    }

    let valorVegetariano = prompt(
      "El servicio viene con: Vegetariano? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorVegetariano !== "") {
      valorServicio.push("Vegetariano");
    }

    let valorPescados = prompt(
      "El servicio viene con: Pescados? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorPescados !== "") {
      valorServicio.push("Pescados");
    }

    let valorMinutas = prompt(
      "El servicio viene con: Minutas? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorMinutas !== "") {
      valorServicio.push("Minutas");
    }

    let valorPizzas = prompt(
      "El servicio viene con: Pizzas? no 'precione enter', si 'marque algo y presione enter' "
    );
    if (valorPizzas !== "") {
      valorServicio.push("Pizzas");
    }
    return valorServicio;
  }

  mostrarDatos() {
    const servicios = this.servicio.join(", ");
    alert(
      `Datos del formulario:
    Nombre: ${this.nombre}
    Email: ${this.email}
    Ubicación: ${this.ubicacion}
    Cantidad: ${this.cantidad}
    Servicio: ${servicios}
    Mensaje: ${this.message}`
    );
  }
}
