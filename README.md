# avl-tree
Self-balancing binary search tree.

## API 
* **insert(key:Number|String)** - Insert value to tree
* **getHeight():Number** - Return height of tree

======

* **insert(key:Number|String)** - Insert value to tree
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