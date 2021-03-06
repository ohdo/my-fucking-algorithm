/*
 * @Author: MIHUIYI689
 * @Date: 2021-02-26 11:51:04
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-03-04 17:57:51
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/数据结构/二叉树.js
 */
import { createBinaryTree, showBinaryTree, TreeNode } from './common.js';

/**
 * NOTE: 226.翻转二叉树
 */
function invertTree(root) {
  if (root === null) {
    return null;
  }
  // 前序遍历 自上而下 自左而右
  const tem = root.left;
  root.left = root.right;
  root.right = tem;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

// {
//   console.log('翻转二叉树:');
//   const tree = createBinaryTree([4, 2, 7, 1, 3, 6, 9]);
//   showBinaryTree(tree);
//   invertTree(tree);
//   showBinaryTree(tree);
// }

/**
 * NOTE: 116.填充每个节点的下一个右侧节点指针
 */
function connect(tree) {
  if (tree === null) return null;
  // @methods 连接两个节点  含非同父节点连接
  const connectTwoNode = (node1, node2) => {
    if (node1 == null || node2 == null) return;
    /**** 前序遍历位置 ****/
    // 将传入的两个节点连接
    node1.next = node2;
    // 连接相同父节点的两个子节点
    connectTwoNode(node1.left, node1.right);
    connectTwoNode(node2.left, node2.right);
    // 连接跨越父节点的两个子节点
    connectTwoNode(node1.right, node2.left);
  };
  // 1.跟节点next设置为null
  root.next = null;
  // 2.遍历连接两个同级接节点
  connectTwoNode(root.left, root.right);
  return root;
}
// {
//   console.log('填充每个节点的下一个右侧节点指针:');
//   const tree = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
//   showBinaryTree(tree);
//   invertTree(tree);
//   showBinaryTree(tree);
// }

/**
 * 654. 最大二叉树
 */
function constructMaximumBinaryTree(nums) {
  // 构建二叉树
  const buildTree  = (arr, left, right) => {
      if (left > right) return null;
      // 找到根节点
      let max = Number.MIN_SAFE_INTEGER, index = -1;
      for (let i = left; i <= right; i++) {
          const val = arr[i];
          if (val > max) {
              index = i;
              max = val
          }
      }
      const root = new TreeNode(max);
      root.left = buildTree(arr, left, index - 1);
      root.right = buildTree(arr, index + 1, right);
      return root;
  }
  return buildTree(nums, 0, nums.length - 1);
};

{
  console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));
}