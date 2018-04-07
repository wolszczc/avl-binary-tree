import AVLTree from '../src'

test('find string in tree', () => {
  const tree = new AVLTree((a,b) => a.a < b.a) 
  tree.insert('atest')
  tree.insert('ztest')
  tree.insert('btest')
  tree.insert('ytest')

  expect(tree.find('atest')).toBe(true);
});

test('find number in tree with objects', () => {
  const tree = new AVLTree((a,b) => a.a < b.a) 
  tree.insert({x:{a:4, b:'atest'}})
  tree.insert({x:{a:5, b:'ztest'}})
  tree.insert({x:{a:1, b:'btest'}})
  tree.insert({x:{a:8, b:'ytest'}})

  expect(tree.find(8, 'x.a')).toBe(true);
});