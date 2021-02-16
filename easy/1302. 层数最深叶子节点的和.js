/**
 * @description: 给你一棵二叉树，请你返回层数最深的叶子节点的和。
 * Definition for a binary tree node
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * 
 * @param {TreeNode} root 根节点
 * @return {number}
 */
const deepestLeavesSum = function(root) {
  let maxdep = -1;
  let total = 0;

  dfs(root, 0);

  return total;

  function dfs(node, dep) {
    if (root === null) return;
    if (dep > maxdep) {
      maxdep = dep;
      total = node.val;
    } else if (dep === maxdep) {
      total += node.val;
    }
    dfs(node.left, dep + 1);
    dfs(node.right, dep + 1);
  }
};
