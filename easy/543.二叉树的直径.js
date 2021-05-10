/**
 * 给定一棵二叉树，你需要计算它的直径长度。
 * 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。
 * 这条路径可能穿过也可能不穿过根结点。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
  let path = 1;
  loop(root);

  // 求路径经过节点数的最大值减一
  return path - 1;

  function loop(node) {
    if (!node) {
      return 0;
    }
    const left = loop(node.left);
    const right = loop(node.right);
    path = Math.max(path, left + right + 1);
    return Math.max(left, right) + 1;
  }
};