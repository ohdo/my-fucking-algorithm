/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-13 15:33:27
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-13 16:39:11
 * @Description: NOTE: 经典回溯 - 简单版本
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/回溯/46.全排列.js
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const len = nums.length;
  const useMap = {};
  const dfs = (path = []) => {
    if (path.length === len) return res.push([...path]);
    for (let i = 0; i < len; i++) {
      if (useMap[i]) continue;
      useMap[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      useMap[i] = false;
    }
  };
  dfs();
  return res;
};

console.log(permute([1, 2, 3]));
