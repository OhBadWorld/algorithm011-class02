/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root==null||root==p||root==q) { // 遇到null节点返回null，遇到p或q，返回p或q
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q) // 左子树的调用结果
  let right = lowestCommonAncestor(root.right, p, q) // 右子树的调用结果
  if (left && right) { // p q分居左右子树，返回父节点root
    return root
  }
  return left ? left : right // 哪个子树有结果，就返回哪个子树的结果
};