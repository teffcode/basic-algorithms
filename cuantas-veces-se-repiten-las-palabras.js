/**
 * Cuántas veces se repiten las palabras de una frase
 * 
 * Entrada: Frase
 * Salida: número de veces que se repiten las palabras
 */

function howManyTimes(phrase) {
  var arrPhrase = phrase.split(' ')
      dictionary = {};

  arrPhrase.forEach(word => {
    if(dictionary[word]) {
      dictionary[word] = dictionary[word] + 1;
    } else {
      dictionary[word] = 1;
    }
  });

  return dictionary;
}