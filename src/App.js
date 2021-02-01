import React, { Component } from 'react'
import Header from './component/header/Header'
import Headline from './component/headline/Headline'
import './app.css'
export default class App extends Component {
  render() {
    return (
      <div className='App' data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline
            header='Post'
            desc='Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public. We also have thousands of freeCodeCamp study groups around the world.

            Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.'
          />
        </section>
      </div>
    )
  }
}
