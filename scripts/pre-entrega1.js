chatbot = () => {
  while (true) {

    let nombre = prompt("¡Bienvenido(a) a Clínica O! 👋🏼 \n¿Cuál es tu nombre? ");
    if (nombre === "") {
      alert("¡Hasta luego! Espero haberte ayudado.");
      break; // Si el paciente envía un mensaje vacío, se termina el chat.
    }

    let respuesta = respuestaPaciente(nombre);
    alert(respuesta);

    // // Información al backoffice
    console.log("Turno de " + nombre);
    console.log("Respuesta del chat: " + respuesta);
  }
}

datosPaciente = () => {
  let nombrePaciente = prompt("Ingrese su nombre:");
  let apellido = prompt("Ingrese su apellido:");
  let identificacion = prompt("Ingresa tu RUT:");
  let email = prompt("Ingresa tu correo electrónico:")

  // Información al backoffice
  console.log("Datos contacto del paciente");
  console.log("Nombre: " + nombrePaciente);
  console.log("Apellido: " + apellido);
  console.log("Identificación (RUT): " + identificacion);
  console.log("Correo Electrónico: " + email);
}

respuestaPaciente = (nombre) => {

  let opciones

  if (nombre.trim() !== ("")) {
    opciones = parseInt(prompt("¡Hola, " + nombre + "! ¿En qué puedo ayudarte hoy? \n1. Agendar cita. \n2. Contáctame. \n3. Derivame con un ejecutivo."));

  } else {
    opciones = "Por favor ingresa tu nombre";
    console.log("Turno de : " + nombre);
    console.log("acción a ejecutar: " + opciones);
  }

  switch (opciones) {
    case 1:
      datosPaciente();
      let fecha = prompt("Por favor, ingresa la fecha de la cita (día/mes/año):");
      let hora = prompt("Por favor, ingresa la hora de la cita (hh:mm):");
      return "Cita agendada para el " + fecha + " a las " + hora;

    case 2:
      datosPaciente();
      return "Datos ingresados correctamente. Te contactarémos a la brevedad.";

    case 3:
      datosPaciente()
      return "En breve serás contactado por uno de nuestros ejecutivos.";
    default:
      return "Por favor ingresa una opción válida";
  }
}

chatbot();