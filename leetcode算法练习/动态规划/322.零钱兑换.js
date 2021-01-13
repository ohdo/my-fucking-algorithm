/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-12 15:00:12
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-12 20:54:26
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/322零钱兑换.js
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp[i] = amount +1;
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === amount +1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
