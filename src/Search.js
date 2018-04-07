export default class Search {
  /**
   * Search value in root
   * @param {AVLTree} root 
   * @param {Any} key - serach value
   * @param {String} path - path to value in object
   * @returns {Boolean} - true when key was found, false if not
   */
  static find (root, key, path) {
    if (root) {
      let value = root.value
      // if object get value from key
      if(typeof root.value === 'object') {
        value = Search.getValueFromObject(root.value, path)
      }
      if (value === key) {
        return true
      }

      // Find the element in left sub-tree
      if (Search.find(root.left, key, path) === true) {
        return true
      } 
      // Find the element in right sub-tree
      else if (Search.find(root.right, key, path) === true) {
        return true
      }
    }

    return false
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