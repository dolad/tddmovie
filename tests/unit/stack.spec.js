import Stack from '@/stack'

describe('Stack', () => {
  let stack
  beforeEach(() => {
    stack = new Stack(3)
  })

  afterEach(() => {
    stack.item = []
  })

  it('should construct a stack with a given capacity', () => {
    expect(stack.item).toEqual([])
    expect(stack.capacity).toBe(3)
  })

  it('should  have an isEmpty function that return true if the stack is empty and false otherwise', () => {
    expect(stack.isEmpty()).toBe(true)
    stack.item.push(2)
    expect(stack.isEmpty()).toBe(false)
  })

  describe('Stack.push', () => {
    it('should add a new element at the top', () => {
      stack.push(2)
      expect(stack.item[stack.item.length - 1]).toBe(2)
    })
    it('should return element pushed to it', () => {
      const elementPush = stack.push(2)
      expect(elementPush).toBe(2)
    })
    it('should return full while trying to pass an element beyond it capacity', () => {
      stack.item = [1, 2, 3]
      const element = stack.push(4)
      expect(stack.item[stack.item.length - 1]).toBe(3)
      expect(element).toBe('Full')
    })
  })
  describe('Stack.pop', () => {
    it('should remove an element from the top', () => {
      stack.item = [1, 2, 3]
      stack.pop()
      expect(stack.item).toEqual([1, 2])
    })
    it('should return an element remove', () => {
      stack = [1, 2, 3]
      const element = stack.pop()
      expect(element).toBe(3)
    })
    it('should return false if try to pop from an empty stack', () => {
      stack.item = []
      expect(stack.pop()).toBe('Empty')
    })
  })

  describe('Stack.peep', () => {
    it('should return the element at the top', () => {
      stack.item = [1, 2, 3]
      const element = stack.peek()
      expect(element).toBe(3)
    })

    it('should return empty id you try to peek an empty stack', () => {
      expect(stack.peek()).toBe('Empty')
    })
  })
})
