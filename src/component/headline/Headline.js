import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Headline extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { header, desc } = this.props
    return (
      <div data-test='header'>
        <h1 data-test='headerProp'>{header}</h1>
        <p data-test='desc'>{desc}</p>
      </div>
    )
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  // Complex example for working with PropTypes (not used in component)
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
}
