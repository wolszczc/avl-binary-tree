import Insert from './Insert'
import AVLHelper from './AVLHelper'

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
   * @param {value} key
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
}
