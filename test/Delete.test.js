import AVLTree from '../src'

test('Delete string from tree', () => {
  const tree = new AVLTree((a,b) => a < b) 
  tree.insert('atest')
  tree.insert('ztest')
  tree.insert('btest')
  tree.insert('ytest')

  tree.delete('atest')

  expect(tree.find('atest')).toBe(false);
});

test('delete number from tree with objects', () => {
  const tree = new AVLTree((a,b) => a.a < b.a) 
  tree.insert({x:{a:4, b:'atest'}})
  tree.insert({x:{a:5, b:'ztest'}})
  tree.insert({x:{a:1, b:'btest'}})
  tree.insert({x:{a:8, b:'ytest'}})

  tree.delete(8, 'x.a')

  expect(tree.find(8, 'x.a')).toBe(false);
});