/**
 * 题目一：给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组（的长度）。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const len = nums.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let a = 0;
    let b = 0;
    let count = 0;
    for (let j = i; j < len; j++) {
      if (nums[j] === 0) {
        a++;
      } else {
        b++;
      }
      if (a === b) {
        count = a + b;
      }
    }
    max = Math.max(max, count);
  }
  return max;
};

/**
 * 题目二：
 * 在显示着数字的坏计算器上，我们可以执行以下两种操作：
 * 双倍（Double）：将显示屏上的数字乘 2；
 * 递减（Decrement）：将显示屏上的数字减 1 。
 * 最初，计算器显示数字 X。
 *
 * 返回显示数字 Y 所需的最小操作数。
 */

/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function (X, Y) {
  let count = 0;
  while (X !== Y) {
    if (X < Y) {
      if (Y / 2 < X) {
        const step2 = 2 * X - Y + 1;
        let step1 = 0;
        const off = Y % 2;
        Y = (Y + off) / 2;
        step1 += off;
        step1++;
        step1 += X - Y;
        count = count + Math.min(step1, step2);
        break;
      } else {
        const off = Y % 2;
        Y = (Y + off) / 2;
        count += off;
      }
    } else {
      X--;
    }
    count++;
  }
  return count;
};

/**
 * 题目三：
 * 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。
 *
 * 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const sumMap = {};
  const len = nums.length;
  let opt = Infinity;
  for (let i = -1; i < len; i++) {
    sumMap[i] = (nums[i] || 0) + (sumMap[i - 1] || 0);
    if (sumMap[i] > x) break;
    const off = x - sumMap[i];
    if (off === 0) {
      opt = Math.min(opt, i + 1);
      break;
    }
    for (let j = len - 1; j > i; j--) {
      sumMap[j] = nums[j] + (sumMap[j + 1] || 0);
      if (sumMap[j] > off) break;
      const rOff = off - sumMap[j];
      if (rOff === 0) {
        opt = Math.min(opt, i + 1 + len - j);
        break;
      }
    }
  }
  return opt === Infinity ? -1 : opt;
};

console.log(minOperations([1, 1, 4, 2, 3], 5));
console.log(minOperations([5, 6, 7, 8, 9], 4));
console.log(minOperations([3, 2, 20, 1, 1, 3], 10));
