/**
 * @description: 给定给一个二叉树，返回所有从根节点到叶子节点的路径
 * function TreeNode(val, left, right) {
 *   this.val = (val === undefined ? 0 : val)
 *   this.left = (left === undefined ? null : left)
 *   this.right = (right === undefined ? null : right)
 * }
 */
const binaryTreePaths = function(root) {
  const paths = [];
  const construct_paths = (node, path) => {
    if (node) {
      path += node.val.toString();
      if (node.left === null && node.right === null) {
        // 叶子节点
        paths.push(path);
      } else {
        path += '->';
        construct_paths(node.left, path);
        construct_paths(node.right, path);
      }
    }
  };
  construct_paths(root, '');
  return paths;
};
