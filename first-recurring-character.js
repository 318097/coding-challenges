const firstRecurringCharacter = (arr) => {
  const map = {};
  let solution;
  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];
    if (!map[ch]) {
      map[ch] = 1;
    } else {
      solution = ch;
      break;
    }
  }
  return solution;
};

console.log(firstRecurringCharacter(['a', 'd', 'y', 'z', 'd', 'a', 'e', 'h', 'k']));
