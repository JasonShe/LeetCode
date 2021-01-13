/**
 * @description: 链表节点
 * @param {number} val 
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @description: 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点
 * @param {ListNode} head 
 */
// 方法一：迭代
const reverseListForEach = function (head) {
  // 需要一个变量记录当前节点，一个变量记录上一个节点
  let curr = head, pre = null;

  while (curr) {
    // 需要临时存储后一个节点
    const next = curr.next;

    curr.next = pre;
    pre = curr;
    curr = next;
  }

  return pre;
};
