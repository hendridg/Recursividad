const isEven = function (n) {
  return n % 2 === 0;
};

const isOdd = function (n) {
  return !isEven(n);
};

const power = function (x, n) {
  println("Computing " + x + " raised to power " + n + ".");
  // base case
  if (n === 0) {
    return 1;
    // recursive case: n is negative
  } else if (n < 0) {
    return 1 / (power(x, -n - 1) * x);
    // recursive case: n is odd
  } else if (isOdd(n)) {
    return power(x, n - 1) * x;
    // recursive case: n is even
  } else if (isEven) {
    var retorno = power(x, n / 2);
    return retorno * retorno;
  }
};

const displayPower = function (x, n) {
  console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
// Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
// Program.assertEqual(power(3, 1), 3);
displayPower(3, 2);
// Program.assertEqual(power(3, 2), 9);
displayPower(3, -1);
// Program.assertEqual(power(3, -1), 1/3);
// Program.assertEqual(power(2, 2), 4);
// Program.assertEqual(power(4, 1), 4);
