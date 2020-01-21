function hasPalindromePermutation(string) {
  // Check if any permutation of the input is a palindrome

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of string) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

console.log(hasPalindromePermutation("hll"));
