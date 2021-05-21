/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  // return DFS(root, root);
  return UseQueue(root, root);
};

// 使用递归方法 -> 将大问题转化为小问题：一个树是否是镜像对称可以理解为一个节点的左右子节点是否镜像对称
function DFS(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}

// 使用迭代，利用队列数据结构，比较方法还是一样
function UseQueue(p, q) {
  const array = [];
  array.push(p);
  array.push(q);

  while (array.length > 0) {
    p = array.unshift();
    q = array.unshift();

    if (p === null && q === null) {
      continue;
    }

    if ((p === null || q === null) || (p.val !== q.val)) {
      return false;
    }

    array.push(p.left);
    array.push(q.right);

    array.push(p.right);
    array.push(q.left);
  }

  return true;
}
