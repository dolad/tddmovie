class Stack {
  constructor (capacity) {
    this.item = []
    this.capacity = capacity
  }

  isEmpty () {
    return this.item.length === 0
  }

  isFull () {
    return this.item.length === this.capacity
  }

  push (element) {
    if (this.isFull()) {
      return 'Full'
    }
    this.item.push(element)
    return element
  }

  pop () {
    return this.isEmpty() ? 'Empty' : this.item.pop()
  }

  peek () {
    return this.isEmpty() ? 'Empty' : this.item[this.item.length - 1]
  }
}

export default Stack
