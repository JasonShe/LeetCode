/**
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 
 * 判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和 targetSum
 * 叶子节点 是指没有子节点的节点。
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
  if (root === null) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

// 归纳功能：询问是否存在从 root 到叶子节点的路径，满足其路径和为 sum
// 假定从根节点到当前节点的值之和为 val，我们可以将这个大问题转化为一个小问题：是否存在从当前节点的子节点到叶子节点的路径，满足其路径和为 sum - val
