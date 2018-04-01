import AVLTree from './AVLTree'

const tree = new AVLTree()

tree.insert(1) 
tree.insert(2) 
tree.insert(3) 
tree.insert(4)  
tree.insert(2.5)
tree.insert(5) 
tree.insert(5) 
tree.insert(5) 

console.log(tree.root)