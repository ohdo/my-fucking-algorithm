/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-25 15:00:54
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-26 11:41:26
 * @Description: FIXME: 错误答案 待完成
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/二分搜索/34.在排序数组中查找元素的第一个和最后一个位置.js
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	if (nums.length == 0) return [-1, -1];
	let left = 0,
		right = nums.length - 1;
	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		const val = nums[mid];
		if (val === target) {
			let leftMid = (rightMid = mid);
			while (nums[left] !== nums[right]) {
				leftMid = Math.floor((left + leftMid) / 2);
				rightMid = Math.ceil((right + rightMid) / 2);
				if (nums[leftMid] !== target && leftMid < mid) {
					left = leftMid + 1;
				}
				if (nums[rightMid] !== target && rightMid > mid) {
					right = rightMid - 1;
				}
			}
			return [left, right];
		} else if (val > target) {
			right = mid - 1;
		} else if (val < target) {
			left = mid + 1;
		}
	}
	if (nums[left] === target && nums[right] === target) return [left, right];
	return [-1, -1];
};

// console.log(searchRange([5,7,7,8,8,10], 8));
// console.log(searchRange([1], 1));
// console.log(searchRange([2,2], 2));
console.log(searchRange([0,0,0,1,2,3], 0));