const { BinarySearchTree } = require('./binary-search-tree');

const breathFirstSearch = (tree) => {
  let currentNode = tree.root;
  let queue = [];
  const output = [];
  queue.push(currentNode);

  while (queue.length) {
    currentNode = queue.shift();
    output.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }

  return output;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(breathFirstSearch(tree));