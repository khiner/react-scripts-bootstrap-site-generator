import React, { Component } from 'react'
import MainNav from './MainNav'
import MainContent from './MainContent'

export default class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <MainContent />
      </div>
    )
  }
}
