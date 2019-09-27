/**
 * Fibonacci:
 * 1 -> 1
 * 2 -> 1
 * 3 -> 2
 * 4 -> 3
 * 5 -> 5
 */

function fibonacci (number) {
  var fibo = [0, 1];

  if (number <= 2) return 1;
  for (var i = 2; i <= number; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }

  return fibo[number];
}