import Insert from './Insert'
import Helper from './Helper'
import Search from './Search'
import Delete from './Delete'

export default class AVLTree {
  /**
   * Constructor AVLTree
   * @param {Object} options - AVLTree options
   * @param {Function} options.comparator - compare two objects|values 
   * @param {String} options.path - list of keys in object path
   */
  constructor (options = {}) {
    this.root = null
    this.comparator = options.comparator || Helper.compare
    this.path = options.path || ''
  }

  /**
   * Add new value to tree
   * @param {Any} key
   */
  insert (key) {
    this.root = Insert.insertToNode(this.root, key, this.comparator) 
  }

  /** Get height of tree
   * @returns height of tree
   */
  getHeight () {
    return Helper.getHeight(this.root)
  }

  /**
   * Search value in tree
   * @param {Any} value 
   * @param {String} path - list of keys in object path
   * @returns {Boolean} - true when value was found, false if not
   */
  find (value, path = this.path) {
    return Search.find(this.root, value, path)
  }

  /**
   * Delete node with input value
   * @param {Any} value 
   * @param {String} path - list of keys in object path
   */
  delete (value, path = this.path) {
    this.root = Delete.deleteNode(this.root, value, path, this.comparator)
  }

  /**
   * Get minimum root of tree. Depends from comparator.
   * @param {AVLTree} root 
   * @returns {AVLTree} root with the smalest value
   */
  getMinValue() {
    return Helper.getLastLeftRoot(this.root).value
  }

    /**
   * Get maximum root of tree. Depends from comparator.
   * @param {AVLTree} root 
   * @returns {AVLTree} root with the biggest value
   */
  getMaxValue() {
    return Helper.getLastRightRoot(this.root).value
  }
}
