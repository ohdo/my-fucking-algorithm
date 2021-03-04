/*
 * @Author: MIHUIYI689
 * @Date: 2021-03-04 15:45:15
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-03-04 15:46:17
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/数据结构/common.js
 */
const isUndefined = val => val === undefined;
/**
 * 链表结点
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 创建链表
 */
export function createNode(arr = [1, 2, 3, 4, 5]) {
  let h = new ListNode(null);
  let tem = h;
  arr.forEach(v => {
    tem.next = new ListNode(v);
    tem = tem.next;
  });
  return h.next;
}

/**
 * 打印链表结构
 */
export function showLink(head) {
  let temp = head;
  const res = [];
  while (temp != null) {
    res.push(temp.val);
    temp = temp.next;
  }
  console.log(res.join(' -> '));
}

/**
 * 二叉树结点
 */
export function TreeNode(val, left, right, next) {
  this.val = isUndefined(val) ? 0 : val;
  this.left = left || null;
  this.right = right || null;
  this.next = next || null;
}

/**
 * 创建二叉树
 */
export function createBinaryTree(arr = [4, 2, 7, 1, 3, 6, 9]) {
  if (arr.length === 0) return null;
  const [v, ...arr1] = arr;
  const root = new TreeNode(v);
  const installNode = val => {
    const node = new TreeNode(val);
    let current = root,
      parent;
    while (current) {
      parent = current;
      //当插入的值小于根节点的值时，将值作为左节点插入
      if (val < current.val) {
        current = current.left;
        if (current == null) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = node;
          break;
        }
      }
    }
  };
  arr1.forEach(val => {
    installNode(val);
  });
  return root;
}

/**
 * 打印二叉树
 */
export function showBinaryTree(tree) {
  console.log(tree);
}
