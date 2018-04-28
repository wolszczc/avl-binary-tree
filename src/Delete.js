import Helper from './Helper'

export default class Delete {
  /**
   * Delete node with input value
   * @param {AVLTree} root
   * @param {*} key
   * @param {String} path - list of keys in object path
   * @param {Function} comparator compare two object|value
   * @returns {AVLTree} new tree without deleted node
   */
  static deleteNode (root, key, path, comparator) {
    // Perform standard BST delete
    if (!root) {
      return root
    } else {
      let value = root.value
      // if object get value from key
      if (typeof root.value === 'object') {
        value = Helper.getValueFromObject(root.value, path)
      }
      if (key < value) {
        root.left = Delete.deleteNode(root.left, key, path, comparator)
      } else if (key > value) {
        root.right = Delete.deleteNode(root.right, key, path, comparator)
      } else {
        if (!root.left) {
          const rootRight = root.right
          root = null
          return rootRight
        } else if (!root.right) {
          const rootLeft = root.left
          root = null
          return rootLeft
        }
        const minValueRoot = Helper.getMinValueNode(root.right)
        root.value = minValueRoot.value
        root.right = Delete.deleteNode(root.right, minValueRoot, comparator)
      }
    }

    // If the tree has only one node
    if (!root) {
      return root
    }

    // Update the height of the ancestor node
    root.height = 1 + Helper.maxRootHeight(root)

    // Get the balance factor
    const balance = Helper.getBalance(root)

    // If the node is unbalanced
    // Left Left
    if (balance > 1 && Helper.getBalance(root.left) >= 0) {
      return Helper.rightRotate(root)
    }
    // Right Right
    if (balance < -1 && Helper.getBalance(root.right) <= 0) {
      return Helper.leftRotate(root)
    }
    // Left Right
    if (balance > 1 && Helper.getBalance(root.left) < 0) {
      root.left = Helper.leftRotate(root.left)
      return Helper.rightRotate(root)
    }
    // Right Left
    if (balance < -1 && Helper.getBalance(root.right) > 0) {
      root.right = Helper.rightRotate(root.right)
      return Helper.leftRotate(root)
    }

    return root
  }
}
