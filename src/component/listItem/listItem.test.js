import React, { Component } from 'react'
import { shallow } from 'enzyme'
import ListItem from './listItem'
import { findByTestAtrr, checkProps } from './../../../Utils'

describe('listItem component', () => {
  describe('checking props', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'title',
        desc: 'hello there testing props',
      }
      const propsError = checkProps(ListItem, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('component renders', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        title: 'button text',
        desc: 'hello there testing props',
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('should render without error', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent')
      expect(component.length).toBe(1)
    })

    it('should render a title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle')
      expect(title.length).toBe(1)
    })

    it('should render a description', () => {
      const desc = findByTestAtrr(wrapper, 'componentDesc')
      //   console.log(wrapper.debug())
      expect(desc.length).toBe(1)
    })
  })
  describe('Should NOT render', () => {
    let wrapper
    beforeEach(() => {
      const props = {
        desc: 'Some text',
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent')
      expect(component.length).toBe(0)
    })
  })
})
