import TreeNode from './TreeNode'
import Helper from './Helper'

export default class Insert {
  /**
   * Insert new value to node.
   * @param {AVLTree} root 
   * @param {any} key 
   * @param {function} comparator compare two object|value
   * @returns {AVLTree} node with new value
   */
  static insertToNode (root, key, comparator) {
    // Perform normal BST
    if (!root) {
      return new TreeNode(key)
    } else if (comparator(key, root.value)) {
      root.left = Insert.insertToNode(root.left, key, comparator)
    } else {
      root.right = Insert.insertToNode(root.right, key, comparator)
    }

    // Update the height of the ancestor nod
    root.height = 1 + Helper.maxRootHeight(root)

    // Get the balance factor
    const balance = Helper.getBalance(root)

    // If unbalanced
    // Left Left
    //      z                                      y 
    //     / \                                   /   \
    //    y   T4      Right Rotate (z)          x      z
    //   / \          - - - - - - - - ->      /  \    /  \ 
    //  x   T3                               T1  T2  T3  T4
    // / \
    // T1   T2
    if (balance > 1 && comparator(key, root.value)) {
      return Helper.rightRotate(root)
    }
    // Right Right 
    //    z                                y
    //   /  \                            /   \ 
    //  T1   y     Left Rotate(z)       z      x
    //      /  \   - - - - - - - ->    / \    / \
    //     T2   x                     T1  T2 T3  T4
    //         / \
    //       T3  T4
    if (balance < -1 && comparator(root.value, key)) {
      return Helper.leftRotate(root)
    }
    // Left Right 
    //      z                               z                           x
    //     / \                            /   \                        /  \ 
    //    y   T4  Left Rotate (y)        x    T4  Right Rotate(z)    y      z
    //   / \      - - - - - - - - ->    /  \      - - - - - - - ->  / \    / \
    // T1   x                          y    T3                    T1  T2 T3  T4
    //     / \                        / \
    //   T2   T3                    T1   T2
    if (balance > 1 && comparator(root.value, key)) {
      root.left = Helper.leftRotate(root.left)
      return Helper.rightRotate(root)
    }
    // Right Left
    //    z                            z                            x
    //   / \                          / \                          /  \ 
    // T1   y   Right Rotate (y)    T1   x      Left Rotate(z)   z      y
    //     / \  - - - - - - - - ->     /  \   - - - - - - - ->  / \    / \
    //    x   T4                      T2   y                  T1  T2  T3  T4
    //   / \                              /  \
    // T2   T3                           T3   T4
    if (balance < -1 && comparator(key, root.value)) {
      root.right = Helper.rightRotate(root.right)
      return Helper.leftRotate(root)
    }

    return root
  }
}