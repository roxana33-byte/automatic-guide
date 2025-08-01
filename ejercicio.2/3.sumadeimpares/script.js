function calcular() {
  let sumaImpares = 0;
  let sumaPares = 0;
  let conteoPares = 0;

  while (true) {
    let entrada = prompt("Ingrese un número (0 para terminar):");
    let num = parseInt(entrada);

    if (isNaN(num)) {
      alert("Número inválido");
      continue;
    }
    if (num === 0) break;

    if (num % 2 === 0) {
      sumaPares += num;
      conteoPares++;
    } else {
      sumaImpares += num;
    }
  }

  let promedioPares = conteoPares > 0 ? (sumaPares / conteoPares).toFixed(2) : 0;

  document.getElementById("resultado").innerHTML =
    `Suma de impares: ${sumaImpares} <br> Promedio de pares: ${promedioPares}`;
}
