export class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.currNode = null;
  }

  append(value) {
    const newTail = new Node(value);

    if (this.headNode === null) {
      this.headNode = newTail;
      this.tailNode = newTail;
    } else {
      this.tailNode.nextNode = newTail;
      this.tailNode = newTail;
    }
  }

  prepend(value) {
    const newHead = new Node(value);

    if (this.headNode === null) {
      this.headNode = newHead;
      this.tailNode = newHead;
    } else {
      newHead.nextNode = this.headNode;
      this.headNode = newHead;
    }
  }

  size() {
    let size = 0;
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      this.currNode = this.currNode.nextNode;
      size++;
    }
    return size;
  }

  head() {
    return this.headNode;
  }

  tail() {
    return this.tailNode;
  }

  at(index) {
    this.currNode = this.headNode;

    for (let i = 0; i < index; i++) {
      this.currNode = this.currNode.nextNode;
    }
    return this.currNode;
  }

  pop() {
    this.tailNode = null;
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.nextNode.nextNode === null) {
        this.tailNode = this.currNode;
        this.currNode.nextNode = null;
      }
      this.currNode = this.currNode.nextNode;
    }
  }

  contains(value) {
    this.currNode = this.headNode;

    while (this.currNode !== null) {
      if (this.currNode.value === value) {
        return true;
      }
      this.currNode = this.currNode.nextNode;
    }

    return false;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// LinkedList {
//   head: Node1;
//   tail: Node3;
//   curr: Node2;
//   Node1 {
//     value,
//     nextNode,
//   }
//   Node2 {
//     value,
//     nextNode,
//   }
//   Node3 {
//     value,
//     nextNode,
//   }
// }
