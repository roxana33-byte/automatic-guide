function verificar() {
  let num = parseInt(document.getElementById("numero").value);
  let mensaje = "";

  if (isNaN(num) || num <= 0) {
    mensaje = "Debe ser un número entero positivo.";
  } else if (num < 10) {
    mensaje = "Tiene 1 cifra.";
  } else if (num < 100) {
    mensaje = "Tiene 2 cifras.";
  } else if (num < 1000) {
    mensaje = "Tiene 3 cifras.";
  } else {
    mensaje = "El número tiene más de 3 cifras.";
  }

  document.getElementById("respuesta").textContent = mensaje;
}
