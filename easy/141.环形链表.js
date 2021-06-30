/**
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
 * 如果 pos 是 -1，则在该链表中没有环。
 * 注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 
 * function ListNode(val) {
 *  this.val = val;
 *  this.next = null;
 * }
 */

const hasCycle = function(head) {
  if (!head || !head.next) return false;

  let slowPointer = head;
  let fastPointer = head.next;

  while (slowPointer !== fastPointer) {
    if (!fastPointer || !fastPointer.next) {
      return false;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return true;
};

/**
 * 解题思路
 *    Floyd 判圈算法
 *    让快指针一次移动 2 步，慢指针一次移动 1 步
 *    若没有环，快指针一定会走到链表末，即 null
 *    若有环，则快指针会先于满指针入环，并且终有一个时间快、慢指针会相遇（相等）
 */
