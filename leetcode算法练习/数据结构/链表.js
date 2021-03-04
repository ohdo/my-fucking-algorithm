/*
 * @Author: MIHUIYI689
 * @Date: 2021-02-26 09:25:37
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-03-04 17:05:21
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/数据结构/链表.js
 */
import { createNode, showLink } from './common.js';

/**
 * 92.反转链表II（中等）.js
 */

// 基础反转
var reverse = function (head) {
  if (head.next == null) return head;
  const last = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

// 反转前N个
var reverseN = function (head, n) {
  let successor = null;
  const reverseList = (head, n) => {
    if (n == 1) {
      // 记录第 n + 1 个节点
      successor = head.next;
      return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    const last = reverseList(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
  };
  return reverseList(head, n);
};

// 反转 [M, N]区间
var reverseBetween = function (head, m, n) {
  if (m === 1) {
    return reverseN(head, n);
  }
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
};

{
  console.log('基础反转:');
  const h = createNode();
  showLink(h);
  const h2 = reverse(h);
  showLink(h2);
}

{
  console.log('反转前N个:');
  const h = createNode();
  showLink(h);
  const h2 = reverseN(h, 2);
  showLink(h2);
}

{
  console.log('反转区间[m, n]:');
  const h = createNode();
  showLink(h);
  const h2 = reverseBetween(h, 2, 4);
  showLink(h2);
}

/**
 * 25.K个一组翻转链表（困难）
 */
function reverseKGroup (head, k) {
  let endNode = head;
  for (let i = 0; i < k; i++) {
    if (endNode === null) return head;
    endNode = endNode.next;
  }
  let p = null,
    c = head,
    n = head;
  while (c !== endNode) {
    n = c.next;
    c.next = p;
    p = c;
    c = n;
  }
  head.next = reverseKGroup(endNode, k);
  return p;
}

{
  console.log('K 个一组翻转链表:');
  const h = createNode();
  showLink(h);
  const h2 = reverseKGroup(h, 2);
  showLink(h2);
}

/**
 * 234. 回文链表
 */

function isPalindrome (head) {
  if (head === null) return false;
  // 翻转链表 @method
  const reverseList = head => {
    let p = null,
      c = head,
      tem = head;
    while (c !== null) {
      tem = c.next;
      c.next = p;
      p = c;
      c = tem;
    }
    return p;
  };
  // 快慢指针获取中间结点 @method
  const getHalfNode = head => {
    let slow = head,
      fast = head;
    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  };
  // 两节点是否相同 @method
  const isSameDirection = (n1, n2) => {
    let node1 = n1,
      node2 = n2;
    while (node2 !== null) {
      if (node1.val !== node2.val) return false;
      node1 = node1.next;
      node2 = node2.next;
    }
    return true;
  };
  // 1.获取中间结点
  const halfNode = getHalfNode(head);
  // 2.反转中间结点之后的结点
  const rightNode = reverseList(halfNode.next);
  // 3.回文判断 两个节点的值是否一直相同
  const result = isSameDirection(head, rightNode);
  // 4.判断结束 还原反转结点
  halfNode.next = reverseList(rightNode);
  return result;
}

{
  console.log('回文链表:');
  const h = createNode([ 1, 2, 1 ]);
  showLink(h);
  const h2 = isPalindrome(h);
  console.log(h2);
}
