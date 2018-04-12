export default class Helper {
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
    root.height = 1 + Helper.maxRootHeight(root)
    subTreeA.height = 1 + Helper.maxRootHeight(subTreeA)

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
    root.height = 1 + Helper.maxRootHeight(root)
    subTreeA.height = 1 + Helper.maxRootHeight(subTreeA)

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
    return Math.max(Helper.getHeight(root.left), Helper.getHeight(root.right))
  }

  /**
   * Get balanced height
   * @param {AVLTree} root 
   * @returns {Number} balanced value of branch height
   */
  static getBalance (root) {
    return !root ? 0 : Helper.getHeight(root.left) - Helper.getHeight(root.right)
  }

  /**
   * Default comparator of two values
   * @param {Number|String} valueA 
   * @param {Number|String} valueB 
   * @returns {boolean} comparison valueA and valueB
   */
  static compare (valueA, valueB) {
    return valueA < valueB
  }

  /**
   * Get minimum root of tree. Depends from comparator.
   * @param {AVLTree} root 
   * @returns {AVLTree} root with the smalest value
   */
  static getMinValueNode(root) {
    if (root === null || root.left === null) {
      return root
    }
    return Helper.getMinValueNode(root.left)
  }

  /**
   * Get value from object
   * @param {Object} key - searched object
   * @param {String} path - path to value in object
   * @returns {Any} - value of path in object
   */
  static getValueFromObject (key, path) {
    let value = key
    path.split('.').forEach((keyName) => {
      value = value[keyName]
    })
    return value
  }
}