import Insert from './Insert'
import AVLHelper from './AVLHelper'

export default class AVLTree {
  constructor () {
    this.root = null
  }

  /**
   * Add new value to tree
   * @param {value} key 
   */
  insert (key) {
    this.root = Insert.insertToNode(this.root, key) 
  }

  /** Get height of tree
   * @returns height of tree
   */
  getHeight () {
    return AVLHelper.getHeight(this.root)
  }
}
