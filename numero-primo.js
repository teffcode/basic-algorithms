/** 
 * Un número primo es divisible sólo por 1 y por el mismo
 * 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37...
*/

function isPrime (number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number !== 1;
}