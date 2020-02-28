import Counter from '@/Counter'

import { shallowMount } from '@vue/test-utils'

describe('Counter', () => {
  let component
  beforeAll(() => {
    component = shallowMount(Counter)
  })
  it('should render a button containing increase', () => {
    expect(component.html()).toContain('<button>Increase</button>')
  })
  it('should render correct the text', () => {
    const counterValue = component.find('p')
    expect(counterValue.text()).toBe('You clicked 0 times')
  })
  it('should have a counter of zero by default', () => {
    expect(component.vm.clicks).toBe(0)
  })
  it('should increase the counter by clicking on the button', () => {
    const button = component.find('button')
    button.trigger('click')
    expect(component.vm.clicks).toBe(1)
  })
})
