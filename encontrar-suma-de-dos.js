/**
 * Mirar si hay dos números que sumen un número determinado
 * 
 * Entrada: Array y Número
 * Salida: true o false
 */

function sumaDeDos(arr, suma) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] == suma) return true
    }
  }

  return false;
}