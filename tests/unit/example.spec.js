// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Example', () => {
  beforeAll(() => {
    console.log('runing before all test')
  })
  afterAll(() => {
    console.log('runing after all test')
  })
  beforeEach(() => {
    console.log('running before each test')
  })
  afterEach(() => {
    console.log('runing after each test')
  })

  it.skip('Should be something', () => {
    console.log('first test')
  })

  it('Should be something else', () => {
    console.log('second test')
  })
  it.only('should do that', () => {
    console.log('third test')
  })
})
