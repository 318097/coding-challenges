class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      // todo
    }

  }

}

const tree = new BinarySearchTree();
tree.insert(6);
tree.insert(4);
tree.insert(48);
tree.insert(1);
tree.insert(8);
tree.insert(98);

console.log(JSON.stringify(tree.root));
console.log(tree.lookup(1));
