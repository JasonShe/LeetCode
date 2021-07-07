/*
 * @Author: Mr.SheYing
 * @Date: 2021-07-07 12:18:06
 * @LastEditTime: 2021-07-07 18:45:37
 * @LastEditors: Mr.SheYing
 * @Description: 
 */
/**
 * 给二叉树的根节点 root，返回它节点的 前序 遍历
 */

// 递归遍历
const preorderTraversalRecursion = function(root) {
  if (!root) return []

  const result = []

  function walk(root) {
    result.push(root.val)
    if (root.left) walk(root.left)
    if (root.right) walk(root.right)
  }
  walk(root)

  return result
}

// 迭代遍历
const preorderTraversalRecursionIteration = function(root) {
  if(!root) return []
  const result = []
  const stack = []
  let node = root
  while(stack.length > 0 || node !== null) {
    while(node !== null) {
      result.push(node.val)
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    node = node.right
  }
  return result
}
