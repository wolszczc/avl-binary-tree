import Insert from '../src/Insert'

test('insert number', () => {
  const tree = Insert.insertToNode(null, 1)
  expect(tree.value).toBe(1);
});

test('insert string', () => {
  const tree = Insert.insertToNode(null, 'test')
  expect(tree.value).toBe('test');
});