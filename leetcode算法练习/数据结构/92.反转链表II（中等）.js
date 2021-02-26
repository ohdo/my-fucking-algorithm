/*
 * @Author: MIHUIYI689
 * @Date: 2021-02-26 09:25:37
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-02-26 11:45:42
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/leetcode算法练习/数据结构/92.反转链表II（中等）.js
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
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
  }
  return reverseList(head, n);
}

// 反转 [M, N]区间
var reverseBetween = function (head, m, n) {
  if (m===1) {
    return reverseN(head, n);
  }
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
}
// 测试数据
// 1->2->3->4->5->null
function createNode (arr = [1,2,3,4,5]) {
  let h = new ListNode(null);
  let tem = h;
  arr.forEach(v => {
    tem.next = new ListNode(v);
    tem = tem.next;
  });
  return h.next;
}
function showLink(head) {
  let temp = head;
  const res = [];
  while (temp != null) {
    res.push(temp.val);
    temp = temp.next;
  }
  console.log(res.join(' -> '));
}

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