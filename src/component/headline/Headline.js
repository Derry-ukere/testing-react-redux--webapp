import React, { Component } from 'react'

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
