import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../headline/Headline'
import checkPropTypes from 'check-prop-types'

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

  describe('proptypes should not throw a warning', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        header: 'Test Header',
        desc: 'Test Desc',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@email.com',
            age: 23,
            onlineStatus: false,
          },
        ],
      }

      const propsErr = checkPropTypes(
        Headline.propTypes,
        expectedProps,
        'props',
        Headline.name
      )
      expect(propsErr).toBeUndefined()
    })
  })
})
