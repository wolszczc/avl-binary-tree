# avl-tree
Self-balancing binary search tree.

## API 
* new AVLTree(comparator:function) - constructor
#### Comparator
Default function
```javascript
function compare (a, b) {
  return a < b
}
```

#### Methods
* **insert(key:any)** - Insert value to tree
* **getHeight():Number** - Return height of tree

## Examples

```javascript
import AVLTree from 'avl-tree';
const tree = new AVLTree()
```

#### Comparator
```javascript
const tree = new AVLTree((a, b) => a < b)
```
#### Methods
* **insert(key:any)** - Insert value to tree
```javascript
// Number
tree.insert(2)
tree.insert(12.3)

// String
tree.insert('foo')
tree.insert('bar')
```

* **getHeight():Number** - Return height of tree
```javascript
tree.getHeight()
```