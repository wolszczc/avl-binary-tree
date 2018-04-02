import TreeNode from './TreeNode'
import AVLHelper from './AVLHelper'

export default class Insert {
  /**
   * Insert new value to node.
   * @param {AVLTree} root 
   * @param {value} key 
   * @returns {AVLTree} with new value
   */
  static insertToNode (root, key) {
    // Perform normal BST
    if (!root) {
      return new TreeNode(key)
    } else if (key < root.value) {
      root.left = Insert.insertToNode(root.left, key)
    } else {
      root.right = Insert.insertToNode(root.right, key)
    }

    // Update the height of the ancestor nod
    root.height = 1 + AVLHelper.maxRootHeight(root)

    // Get the balance factor
    const balance = AVLHelper.getBalance(root)

    // If unbalanced
    // Left Left
    if (balance > 1 && key < root.left.value) {
      return AVLHelper.rightRotate(root)
    }
    // Right Right 
    if (balance < -1 && key > root.right.value) {
      return AVLHelper.leftRotate(root)
    }
    // Left Right 
    if (balance > 1 && key > root.left.value) {
      root.left = AVLHelper.leftRotate(root.left)
      return AVLHelper.rightRotate(root)
    }
    // Right Left
    if (balance < -1 && key < root.right.value) {
      root.right = AVLHelper.rightRotate(root.right)
      return AVLHelper.leftRotate(root)
    }

    return root
  }
}