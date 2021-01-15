/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-13 16:50:47
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-15 11:16:14
 * @Description: 问题解决
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/回溯/51.N皇后.js
 */

/**
 * @param {number} n
 * @return {string[][]}
 * 1.positions数组 使用索引作为x 值作为y
 * 2.指定x 然后遍历y 能添加的就往数组中添加
 * 3.能添加的条件 不在同一行或者同一列 且不在对角线上
 */
var solveNQueens = function(n) {
  const res = [];
  const yMap = new Set();
  const abs = Math.abs;
  const indexToStr = (index) => {
    const arr = new Array(n).fill('.');
    arr[index] = 'Q';
    return arr.join('');
  };
  const canPush = (positions, x, y) => {
    return positions.every((yy, xx, arr) => {
      return abs(y - yy) !== abs(x - xx);
    });
  };
  const dfs = (positions = [], x = 0) => {
    const len = positions.length;
    if (len === n) return res.push(positions.map(i => indexToStr(i)));
    if (x === n || len !== x) return;
    for (let y = 0; y < n; y++) {
      if (!yMap.has(y) && canPush(positions, x, y)) {
        yMap.add(y);
        positions.push(y);
        dfs(positions, x + 1);
        positions.pop();
        yMap.delete(y);
      }
    }
  };
  dfs();
  return res;
};

console.log(solveNQueens(4));
// console.log(solveNQueens(5));
