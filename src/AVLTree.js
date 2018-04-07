import Insert from './Insert'
import AVLHelper from './AVLHelper'
import Search from './Search'

export default class AVLTree {
  /**
   * Constructor AVLTree
   * @param {Function} comparator - compare two object|value  
   */
  constructor (comparator) {
    this.root = null
    this.comparator = comparator || AVLHelper.compare
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
    return AVLHelper.getHeight(this.root)
  }

  /**
   * Search value in tree
   * @param {Any} value 
   * @param {String} path - list of keys in object path
   * @returns {Boolean} - true when value was found, false if not
   */
  find (value, path) {
    return Search.find(this.root, value, path)
  }

}
