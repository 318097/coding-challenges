const { BinarySearchTree } = require('./binary-search-tree');

const depthFirstSearchInorder = (tree) => {
  const traverse = (node, list) => {
    if (node.left) traverse(node.left, list);
    list.push(node.value);
    if (node.right) traverse(node.right, list);
    return list;
  }
  return traverse(tree.root, []);
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(depthFirstSearchInorder(tree));