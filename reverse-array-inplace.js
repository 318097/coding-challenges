function reverse(arr) {
  // Reverse the input array of characters in place
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

console.log(reverse("empty string".split("")));
