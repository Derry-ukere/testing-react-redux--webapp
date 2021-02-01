import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../headline/Headline'

const setUp = (props = {}) => {
  const component = shallow(<Headline />)
  return component
}

describe('Have Props', () => {
  let wrapper
  beforeEach(() => {
    const props = {
      header: 'test',
      desc: 'desc',
    }
    wrapper = setUp(props)
  })

  it('renders without error', () => {
    const component = setUp()
    const wrapper = component.find(`[data-test='header']`)
    expect(wrapper.length).toBe(1)
  })

  it('should render a header', () => {
    const component = setUp()
    const wrapper = component.find(`[data-test='headerProp']`)
    expect(wrapper.length).toBe(1)
  })

  it('should render a desc ', () => {
    const component = setUp()
    const wrapper = component.find(`[data-test='desc']`)
    expect(wrapper.length).toBe(1)
  })
})
