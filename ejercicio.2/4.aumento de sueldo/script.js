function procesarSueldos() {
  let totalAntiguos = 0;
  let totalNuevos = 0;

  while (true) {
    let entrada = prompt("Ingrese el sueldo (o -1 para salir):");
    let sueldo = parseFloat(entrada);

    if (sueldo === -1) break;
    if (isNaN(sueldo) || sueldo < 0) {
      alert("Sueldo inválido");
      continue;
    }

    let aumento = sueldo < 1000 ? sueldo * 0.15 : sueldo * 0.12;
    let nuevoSueldo = sueldo + aumento;

    alert(`Sueldo actual: Q${sueldo.toFixed(2)}\nAumento: Q${aumento.toFixed(2)}\nNuevo sueldo: Q${nuevoSueldo.toFixed(2)}`);

    totalAntiguos += sueldo;
    totalNuevos += nuevoSueldo;
  }

  document.getElementById("resultado").innerHTML =
    `Total sueldos antiguos: Q${totalAntiguos.toFixed(2)}<br>Total sueldos nuevos: Q${totalNuevos.toFixed(2)}`;
}
