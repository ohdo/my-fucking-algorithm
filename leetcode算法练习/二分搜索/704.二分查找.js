/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-25 11:18:48
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-25 11:50:30
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/二分搜索/704.二分查找.js
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		}
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 3));
