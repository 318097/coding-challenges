/**
 * Selection Sort - Find the smallest interger and swap it to its position.
 * @param {array} arr 
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    if (i !== min) {
      const temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};
console.log(selectionSort([37, 45, 29, 8]));
