# avl-binary-tree [![npm version](https://badge.fury.io/js/avl-binary-tree.svg)](https://badge.fury.io/js/avl-binary-tree)
Self-balancing binary search tree.
## Install
```
npm i avl-binary-tree
// or
yarn add avl-binary-tree
```
## API 
* `new AVLTree(options:object):AVLTree` - Constructor.
#### Options
* `comparator:function` - [optional] Compare two values.
* `path:string` - [optional] - When value in tree is object use param `path` to define keys path e.g. `'foo.bar'`. If it use become default value to all paths in methods. Can be overwrite in method param.  
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
* `getMinValue():any` - Return the smallest value of tree. Depends from comparator. If value of left root is smaller than right root value. 
* `getMaxValue():any` - Return the biggest value of tree. Depends from comparator. If value of left root is smaller than right root value.
* `find(value:any, [path:string]):boolean` - Return true when value was 
found, false if not. When value in tree is object use param `path` to define key's path e.g. `'foo.bar'`.
* `delete(value:any, [path:string])` - Delete root with input value. `path` works similar to functions `find`.
## Examples
```javascript
import AVLTree from 'avl-binary-tree';
const tree = new AVLTree()
```
#### Comparator
```javascript
const tree = new AVLTree({
    comparator: (a, b) => a < b
  })
```
#### Methods
* `insert(key:any)` - Insert value to tree
```javascript
tree.insert(1)
tree.insert(3)
```
* `getHeight():number` - Return height of tree
```javascript
tree.getHeight()
```
* `getMinValue():any` - Return the smallest value of tree. Depends from comparator. If value of left root is smaller than right root value. 
```javascript
tree.getMinValue()
```
* `getMaxValue():any` - Return the biggest value of tree. Depends from comparator. If value of left root is smaller than right root value.
```javascript
tree.getMaxValue()
```
* `find(value:any, [path:string]):boolean` - Return true when value was found, false if not. When value in tree is object use param `path` to define keys path e.g. `'foo.bar'`.
```javascript
tree.find(8, 'foo.bar')
```
* `delete(value:any, [path:string])` - Delete root with input value. `path` works similar to functions `find`.
```javascript
tree.delete(8, 'foo.bar')
```