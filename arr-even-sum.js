function sumEvenNumbers(arr) {
  return arr
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);
}

// Example:
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 (2 + 4 + 6)
