function calcularPromedio() {
  let suma = 0;
  let cantidad = 4;

  for (let i = 1; i <= cantidad; i++) {
    let nota = parseFloat(prompt("Ingrese la calificación " + i + ":"));
    if (isNaN(nota) || nota < 0 || nota > 100) {
      alert("Calificación inválida");
      return;
    }
    suma += nota;
  }

  let promedio = suma / cantidad;
  let mensaje = "El promedio es " + promedio.toFixed(2) + ". ";
  mensaje += promedio >= 61 ? "Aprobado." : "Reprobado.";

  document.getElementById("resultado").textContent = mensaje;
}
