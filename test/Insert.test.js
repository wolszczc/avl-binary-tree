import Insert from '../src/Insert'

test('insert number', () => {
  const tree = Insert.insertToNode(null, 1)
  expect(tree.value).toBe(1)
})

test('insert string', () => {
  const tree = Insert.insertToNode(null, 'test')
  expect(tree.value).toBe('test')
})

test('insert object', () => {
  const tree = Insert.insertToNode(null, {foo: 'test'})
  expect(tree.value.foo).toBe('test')
})

test('insert array', () => {
  let tree = {}
  tree = Insert.insertArray(tree, [1, 2, 3, 4], (a, b) => a > b)
  expect(tree.height).toBe(4)
})
