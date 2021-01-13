/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-12 20:45:43
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-13 13:51:50
 * @Description: TODO: 未完成
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/300.最长递增子序列.js
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    const v = nums[i];
    for (let j = 0; j < i; j++) {
      if (v > nums[j] ) {
        // 只有当新增的值大于当前排列中的值时 才需要取最大值做对比
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};