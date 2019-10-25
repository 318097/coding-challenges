class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head)
      return undefined;

    const removed = this.tail;
    removed.prev = null;
    this.tail = removed.prev;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return removed;
  }

  shift() {
    if (!this.length) return undefined;

    const removed = this.head;
    this.head = removed.next;
    this.head.prev = null;

    this.length--;
    return removed;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
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

    let counter, currentNode;

    if (index < this.length / 2) {
      counter = 0;
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
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
      const nextNode = previousNode.next;
      const newNode = new Node(value);

      newNode.next = nextNode;
      nextNode.prev = newNode;

      newNode.prev = previousNode;
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
      const nextNode = removed.next;

      previousNode.next = nextNode;
      nextNode.prev = previousNode;

      removed.next = null;
      removed.prev = null;

      this.length--;
      return removed;
    }
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.print();