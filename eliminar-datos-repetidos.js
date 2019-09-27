/**
 * Eliminar datos repetidos de una matriz
 * Si tengo: [1, 1, 2, 3, 3, 3, 4, 5];
 * Debe quedar: [1, 2, 3, 4, 5];
 */

function deleteRepeat(array) {
  var exist = {},
      arrTemp = [],
      number;

  for(var i = 0; i < array.length; i++) {
    number = array[i];
    if (!exist[number]) {
      arrTemp.push(number);
      exist[number] = true;
    }
  }

  return arrTemp;  
}