export default class AVLHelper {
  /**
   * Rotate tree to left
   * @param {AVLTree} root 
   * @returns {AVLTree} root rotate to left
   */
  static leftRotate (root) {
    const subTreeA = root.right;

    // perform rotation
    [subTreeA.left, root.right] = [root, subTreeA.left]

    // update heights
    root.height = 1 + AVLHelper.maxRootHeight(root)
    subTreeA.height = 1 + AVLHelper.maxRootHeight(subTreeA)

    // the new root
    return subTreeA
  }

  /**
   * Rotate tree to right
   * @param {AVLTree} root 
   * @returns {AVLTree} root rotate to right
   */
  static rightRotate (root) {
    const subTreeA = root.left;

    // perform rotation
    [subTreeA.right, root.left] = [root, subTreeA.right]

    // update heights
    root.height = 1 + AVLHelper.maxRootHeight(root)
    subTreeA.height = 1 + AVLHelper.maxRootHeight(subTreeA)

    // the new root
    return subTreeA
  }

  /**
   * Get tree height
   * @param {AVLTree} root 
   * @returns {Number} height of tree
   */
  static getHeight (root) {
    return !root ? 0 : root.height
  }

  /**
   * Get maximum tree height
   * @param {AVLTree} root 
   * @returns {Number} maximum height of branchs
   */
  static maxRootHeight (root) {
    return Math.max(AVLHelper.getHeight(root.left), AVLHelper.getHeight(root.right))
  }

  /**
   * Get balanced height
   * @param {AVLTree} root 
   * @returns {Number} balanced value of branch height
   */
  static getBalance (root) {
    return !root ? 0 : AVLHelper.getHeight(root.left) - AVLHelper.getHeight(root.right)
  }
}