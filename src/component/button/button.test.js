import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'
import { findByTestAtrr, checkProps } from './../../../Utils'

describe('button component', () => {
  describe('checking Proptypes', () => {
    it('it should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'button text',
        emitEvent: () => {},
      }
      const propsError = checkProps(Button, expectedProps)
      expect(propsError).toBeUndefined()
    })
  })

  describe('renders a button', () => {
    let wrapper
    let mockFunc
    beforeEach(() => {
      mockFunc = jest.fn()
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc,
      }
      wrapper = shallow(<Button {...props} />)
    })

    it('should render a button', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent')
      expect(button.length).toBe(1)
    })

    it('Should emit callback on click event', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent')
      button.simulate('click')
      const callback = mockFunc.mock.calls.length
      expect(callback).toBe(1)
    })
  })
})
