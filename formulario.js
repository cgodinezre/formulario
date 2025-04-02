
function Usuario(nombre, apellido, password, intereses, fechaNacimiento, aceptoPoliticas) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.password = password;
  this.intereses = intereses;
  this.fechaNacimiento = fechaNacimiento;
  this.aceptoPoliticas = aceptoPoliticas;
}

var boton = document.getElementById("enviar");


boton.onclick = function () {

  var nombre = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var password = document.getElementById("password").value.trim();
  var intereses = document.getElementById("intereses").value.trim();
  var fecha = document.getElementById("fecha").value;
  var politicas = document.getElementById("politicas").checked;


  if (nombre === "" || apellido === "" || password === "") {
    alert("Por favor, llena todos los campos obligatorios: nombre, apellido y contraseña.");
    return;
  }


  var usuario = new Usuario(nombre, apellido, password, intereses, fecha, politicas);

  console.log("Usuario registrado:", usuario);


  var mensaje = "¡Formulario enviado con éxito!\n\n" +
                "Nombre: " + usuario.nombre + "\n" +
                "Apellido: " + usuario.apellido + "\n" +
                "Contraseña: " + usuario.password + "\n" +
                "Intereses: " + usuario.intereses + "\n" +
                "Fecha de nacimiento: " + usuario.fechaNacimiento + "\n" +
                "Aceptó políticas: " + (usuario.aceptoPoliticas ? "Sí" : "No");

  alert(mensaje);
};
