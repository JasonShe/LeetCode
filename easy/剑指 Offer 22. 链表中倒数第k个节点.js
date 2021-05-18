/**
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const getKthFromEnd = function(head, k) {
  let l = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    f = f.next;
  }
  while(f !== null) {
    l = l.next;
    f = f.next;
  }
  return l;
};

// 双指针法：先让后指针移动 k 步，然后同时移动两个指针，当后指针到 null 时返回前指针即可
