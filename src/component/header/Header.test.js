import React from 'react'
import { shallow } from 'enzyme'
import Header from '../header/Header'

const setUp = (props = {}) => {
  const component = shallow(<Header />)
  return component
}

describe('Header component test', () => {
  it('renders without error', () => {
    const component = setUp()
    const wrapper = component.find(`[data-test='headlineComponent']`)

    expect(wrapper.length).toBe(1)
  })

  it('should render a logo', () => {
    const component = setUp()
    const wrapper = component.find(`[data-test='img']`)

    expect(wrapper.length).toBe(1)
  })
})
