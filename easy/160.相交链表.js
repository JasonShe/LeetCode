/**
 * 编写一个程序，找到两个单链表相交的起始节点
 */

const getIntersectionNodeByGen = function(headA, headB) {
  const map = new WeakMap();

  let curNode = headA;
  while (curNode) {
    map.set(curNode, 1);
    curNode = curNode.next;
  }

  curNode = headB;
  while (curNode) {
    if (map.has(curNode)) {
      return curNode;
    }
    curNode = curNode.next;
  }

  return null;
}

const getIntersectionNodeByTwoPoint = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let a = headA;
  let b = headB;

  while (a !== b) {
    if (!a) {
      a = a.next;
    } else {
      a = headB;
    }

    if (!b) {
      b = b.next;
    } else {
      b = headA;
    }
  }

  return a;
}

// 1. 创建两个指针 pApApA 和 pBpBpB，分别初始化为链表 A 和 B 的头结点。然后让它们向后逐结点遍历。
// 2. 当 pA 到达链表的尾部时，将它重定位到链表 B 的头结点 (你没看错，就是链表 B); 类似的，当 pB 到达链表的尾部时，将它重定位到链表 A 的头结点。
// 3. 若在某一时刻 pA 和 pB 相遇（因为 A+B = B+A），则 pA/pB 为相交结点。
// 4. 如果两个链表存在相交，它们末尾的结点必然相同。因此当 pA/pB 到达链表结尾时，记录下链表 A/B 对应的元素。若最后元素不相同，则两个链表不相交。
