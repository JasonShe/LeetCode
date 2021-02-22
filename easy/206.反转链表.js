/**
 * @description: 反转一个单链表
 * function ListNode(val, next) {
 *   this.val = val === undefined ? 0 : val;
 *   this.next = next === undefined ? null : val;
 * }
 */

const reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
