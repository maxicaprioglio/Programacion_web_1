export class FormularioServicio {
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