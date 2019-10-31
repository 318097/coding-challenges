const merge = (left, right) => {
  const output = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      output.push(left[i]);
      i++;
    } else {
      output.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    output.push(left[i]);
    i++;
  }

  while (j < right.length) {
    output.push(right[j]);
    j++;
  }

  return output;
};

/**
 * Merge Sort - Sort using Divide-and-Conquer.
 * @param {array} arr 
 */
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(left, right);
};
console.log(mergeSort([37, 45, 29, 8]));
