/**
 * Cuámtas veces se repite una palabra en una frase
 * 
 * Entrada: Frase, palabra que se repite
 * Salida: número de veces que se repite la palabra
 */

function howManyTimes (phrase, word) {
  const phraseArr = phrase.split(' ');
  let temp = 0;
  phraseArr.map(w => {
      if (w === word) return temp++
  })
  return temp;
}