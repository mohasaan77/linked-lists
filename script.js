class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node(value);
      return;
    }
    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = new Node(value);
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode !== null ? this.headNode.value : undefined;
  }

  tail() {
    if (this.headNode === null) return undefined;

    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current.value;
  }

  at(index) {
    if (!Number.isInteger(index) || index < 0) return undefined;

    let current = this.headNode;
    let currentIndex = 0;

    while (current != null && currentIndex < index) {
      current = current.nextNode;
      currentIndex++;
    }

    return current !== null ? current.value : undefined;
  }

  pop() {
    if (this.headNode === null) return undefined;

    let oldHead = this.headNode;
    this.headNode = oldHead.nextNode;
    return oldHead.value;
  }

  contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let index = 0;
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    if (this.headNode === null) return '';

    let result = '';
    let current = this.headNode;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += 'null';

    return result;
  }

  insertAt(index, ...values) {
    if (!Number.isInteger(index) || index < 0) {
      throw new RangeError('Out of Range!');
    }

    let current = this.headNode;
    let currentIndex = 0;

    if (index === 0) {
      for (const value of values.toReversed()) this.prepend(value);

      return;
    }

    while (current !== null && currentIndex < index - 1) {
      current = current.nextNode;
      currentIndex++;
    }

    if (current === null) throw new RangeError('Out of Range!');

    for (const value of values) {
      current.nextNode = new Node(value, current.nextNode);
      current = current.nextNode;
    }
  }

  removeAt(index) {
    if (!Number.isInteger(index) || index < 0) {
      throw new RangeError('Out of Range!');
    }

    if (index === 0) {
      if (this.headNode === null) throw new RangeError('Out of Range!');

      this.pop();
      return;
    }

    let current = this.headNode;
    let currentIndex = 0;

    while (current !== null && currentIndex < index - 1) {
      current = current.nextNode;
      currentIndex++;
    }

    if (current === null || current.nextNode === null)
      throw new RangeError('Out of Range!');

    current.nextNode = current.nextNode.nextNode;
  }
}

export { Node, LinkedList };
