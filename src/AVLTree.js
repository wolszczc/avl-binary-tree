import TreeNode from './TreeNode'

export default class AVLTree {
  constructor () {
    this.root = null
  }

  /**
   * Add new value to tree
   * @param {value} key 
   */
  insert (key) {
    this.root = this.insertToNode(this.root, key) 
  }

  /**
   * Insert new value to node.
   * @param {AVLTree} root 
   * @param {value} key 
   * @returns {AVLTree} with new value
   */
  insertToNode (root, key) {
    // Perform normal BST
    if (!root) {
      return new TreeNode(key)
    } else if (key < root.value) {
      root.left = this.insertToNode(root.left, key)
    } else {
      root.right = this.insertToNode(root.right, key)
    }

    // Update the height of the ancestor nod
    root.height = 1 + this.maxRootHeight(root)

    // Get the balance factor
    const balance = this.getBalance(root)

    // If unbalanced
    // Left Left
    if (balance > 1 && key < root.left.value) {
      return this.rightRotate(root)
    }
    // Right Right 
    if (balance < -1 && key > root.right.value) {
      return this.leftRotate(root)
    }
    // Left Right 
    if (balance > 1 && key > root.left.value) {
      root.left = this.leftRotate(root.left)
      return this.rightRotate(root)
    }
    // Right Left
    if (balance < -1 && key < root.right.value) {
      root.right = this.rightRotate(root.right)
      return this.leftRotate(root)
    }

    return root
  }

  /**
   * Rotate tree to left
   * @param {AVLTree} root 
   * @returns {AVLTree} root rotate to left
   */
  leftRotate (root) {
    const subTreeA = root.right;

    // perform rotation
    [subTreeA.left, root.right] = [root, subTreeA.left]

    // update heights
    root.height = 1 + this.maxRootHeight(root)
    subTreeA.height = 1 + this.maxRootHeight(subTreeA)

    // the new root
    return subTreeA
  }

  /**
   * Rotate tree to right
   * @param {AVLTree} root 
   * @returns {AVLTree} root rotate to right
   */
  rightRotate (root) {
    const subTreeA = root.left;

    // perform rotation
    [subTreeA.right, root.left] = [root, subTreeA.right]

    // update heights
    root.height = 1 + this.maxRootHeight(root)
    subTreeA.height = 1 + this.maxRootHeight(subTreeA)

    // the new root
    return subTreeA
  }

  /**
   * Get tree height
   * @param {AVLTree} root 
   * @returns {Number} height of tree
   */
  getHeight (root) {
    return !root ? 0 : root.height
  }

  /**
   * Get maximum tree height
   * @param {AVLTree} root 
   * @returns {Number} maximum height of branch's
   */
  maxRootHeight (root) {
    return Math.max(this.getHeight(root.left), this.getHeight(root.right))
  }

  /**
   * Get balanced height
   * @param {AVLTree} root 
   * @returns {Number} balanced value of branch height
   */
  getBalance (root) {
    return !root ? 0 : this.getHeight(root.left) - this.getHeight(root.right)
  }
}
