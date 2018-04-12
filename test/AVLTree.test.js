import AVLTree from '../src'

test('insert number', () => {
  const tree = new AVLTree()
  tree.insert(1) 
  expect(tree.root.value).toBe(1);
});

test('insert string', () => {
  const tree = new AVLTree()
  tree.insert('test') 
  expect(tree.root.value).toBe('test');
});

test('insert two values get height two', () => {
  const tree = new AVLTree()
  tree.insert(4) 
  tree.insert(7) 
  expect(tree.getHeight()).toBe(2);
});

test('min value of tree', () => {
  const tree = new AVLTree()
  tree.insert(4) 
  tree.insert(7) 
  expect(tree.getMinValue()).toBe(4);
});