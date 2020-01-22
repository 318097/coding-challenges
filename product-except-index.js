// Interview cake
function getProductsOfAllIntsExceptAtIndex(arr) {
  // For every index in the array, find the product of all the numbers except the number present at that index
  if (arr.length < 2) {
    throw new Error(
      "Getting the product of numbers at other indices requires at least 2 numbers"
    );
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < arr.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= arr[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= arr[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

console.log(getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5])); // [120, 480, 240, 320, 960, 192]
