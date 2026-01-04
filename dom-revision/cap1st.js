function capitalizeFirstLetters(sentence) {
  return sentence
    .split(' ') // Step 1
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Step 2
    .join(' '); // Step 3
}
