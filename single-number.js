/* Url: https://leetcode.com/problems/single-number/ */

/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const mapping = {};
  nums.forEach(num => {
    if (!mapping[num]) {
      mapping[num] = true;
    } else {
      mapping[num] = false;
    }
  });

  for (let num in mapping) {
    if (mapping[num]) {
      return num;
    }
  }
};

singleNumber([2, 2, 1]); // 1
