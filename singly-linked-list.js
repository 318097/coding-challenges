class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head)
      return undefined;

    let currentNode = this.head;
    let tail;
    while (currentNode.next) {
      tail = currentNode;
      currentNode = currentNode.next;
    }
    tail.next = null;
    this.tail = tail;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (!this.length) return undefined;

    const removed = this.head;
    this.head = removed.next;

    this.length--;
    return removed;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    const list = [];
    let currentNode = this.head;
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(list.join(' => '));
    return;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    else if (index === 0) return !!this.shift(value);
    else if (index === this.length) return !!this.push(value);
    else {
      const previousNode = this.get(index - 1);
      const newNode = new Node(value);
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const previousNode = this.get(index - 1);
      const removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this.print();
  }

}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.reverse();
