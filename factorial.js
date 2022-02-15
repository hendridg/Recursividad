const factorial = (n) => {
  // base case:
  if (n === 0) {
    return 1;
    // recursive case:
  } else {
    return factorial(n - 1) * n;
  }
};

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 7! is " + factorial(7) + ".");
console.log("The value of 3! is " + factorial(3) + ".");

// Program.assertEqual(factorial(0), 1);
// Program.assertEqual(factorial(5), 120);
