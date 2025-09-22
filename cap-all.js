function capitalizeAllLetters(sentence) {
  return sentence
    .split(' ')
    .map(word => word.toUpperCase())
    .join(' ');
}

// Example:
console.log(capitalizeAllLetters("hello world from js")); 
// Output: "HELLO WORLD FROM JS"
