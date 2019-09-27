/**
 * Entrada: [1, 4, 5, 3] -> Lista desordenada
 * Salida: 2
 * 
 * Suma lineal de n números: n*(n+1)/2
 */

function numeroPerdido (arr) {
  var n = arr.length + 1,
      sumaLineal = n * (n + 1) / 2,
      sumaTotal = 0;

  for (var i = 0; i < arr.length; i++) {
    sumaTotal += arr[i];
  }

  return sumaLineal - sumaTotal;
}
