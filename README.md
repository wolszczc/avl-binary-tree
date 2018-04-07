# avl-binary-tree
Self-balancing binary search tree.

## API 
* `new AVLTree(comparator:function)` - constructor
#### Comparator
Default compare function
```javascript
function compare (a, b) {
  return a < b
}
```

#### Methods
* `insert(key:any)` - Insert value to tree.
* `getHeight():number` - Return height of tree.
* `find(value:any, path:string):boolean` - Return true when value was found, false if not. When value in tree is object use param `path` to define key's path e.g. `'foo.bar'`.

## Examples

```javascript
import AVLTree from 'avl-binary-tree';
const tree = new AVLTree()
```

#### Comparator
```javascript
const tree = new AVLTree((a, b) => a < b)
```
#### Methods
* `insert(key:any)` - Insert value to tree
```javascript
tree.insert(1)
tree.insert(3)
```

* `getHeight():Number` - Return height of tree
```javascript
tree.getHeight()
```

* `find(value:any, path:string):boolean` - Return true when value was found, false if not. When value in tree is object use param `path` to define keys path e.g. `'foo.bar'`.
```javascript
tree.find(8, 'foo.bar')
```