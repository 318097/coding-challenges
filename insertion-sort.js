/**
 * Insertion Sort - Sort the list by splitting the array into unsorted & sorted..
 * @param {array} arr 
 */
const insertionSort = (arr) => {
  for (let unsortedIndex = 1; unsortedIndex < arr.length; unsortedIndex++) {
    let sortedIndex = unsortedIndex;
    while (sortedIndex > 0 && arr[sortedIndex] < arr[sortedIndex - 1]) {
      const temp = arr[sortedIndex];
      arr[sortedIndex] = arr[sortedIndex - 1];
      arr[sortedIndex - 1] = temp;
      sortedIndex--;
    }
  }
  return arr;
};
console.log(insertionSort([37, 45, 29, 8]));
