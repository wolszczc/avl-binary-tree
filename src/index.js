import AVLTree from './AVLTree'

const tree = new AVLTree()
let root = null

root = tree.insert(root, 1) 
root = tree.insert(root, 2) 
root = tree.insert(root, 3) 
root = tree.insert(root, 4)  
root = tree.insert(root, 2.5)
root = tree.insert(root, 5) 

console.log(root)