/**
 Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
Url: https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const mapping = {};
  let solution;

  nums.forEach((num, index) => {
    mapping[num] = index;
  });
  nums.forEach((num, index) => {
    const diff = target - num;
    if (mapping[diff] && mapping[diff] !== index) {
      solution = [mapping[diff], index];
    }
  });

  return solution;
};

twoSum([2, 7, 11, 15], 9);
