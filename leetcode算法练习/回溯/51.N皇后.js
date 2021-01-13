/*
 * @Author: MIHUIYI689
 * @Date: 2021-01-13 16:50:47
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-01-13 19:49:13
 * @Description: TODO:
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/回溯/51.N皇后.js
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const res = [];
  let abs;
  // const getArr = (index) => {
  //   const arr = new Array(n).fill('');
  //   arr[index] = 'Q';
  //   return arr;
  // };
  // const arrToStr = (positions) => {
  //   return positions.map(position => position.join(''));
  // };
  // 可以添加的方法  0 1 0 0 && 0 0 0 1
  const canPush = (positions, x, y) => {
    if (!abs) abs = Math.abs;
    // if (x === 1 && y === 1)debugger;
    return positions.every((yy, xx, arr) => {
      return abs(y - x) !== abs(yy - xx) && y !== yy && x !== xx;
    });
  };
  const dfs = (positions = [], x = 0) => {
    if (positions.length === n) return res.push([...positions]);
    x = positions.length;
    let flag = false
    for (let y = x; y < n; y++) {
      if (canPush(positions, x, y)) {
        positions.push(y);
        dfs(positions, x++);
        positions.pop();
      }
    }
  };
  dfs();
  return res;
};

console.log(solveNQueens(4));
// console.log(solveNQueens(5));
