/**
 * Entrada: "madam", "somos", "oso", "radar"
 * Salida: True
 */

function palindrome1 (phrase) {
  return phrase == phrase.split('').reverse().join('');
}

function palindrome2 (word) {
  var arrWord = word.split(''),
      arrTemp = [];

  for (var i = arrWord.length - 1; i >= 0; i--) {
    arrTemp.push(arrWord[i]);
  }

  if (arrWord.join('') == arrTemp.join('')) return true;
  return false;
}