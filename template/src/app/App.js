import React, { Component } from 'react'

import MainNav from './MainNav'
import MainContent from './MainContent'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldShowSidebar: false,
    }
  }

  toggleSidebar = () => {
    this.setState({ shouldShowSidebar: !this.state.shouldShowSidebar })
  }

  render() {
    return (
      <div>
        <MainNav onShowSidebarClicked={this.toggleSidebar} />
        <MainContent
          shouldShowSidebar={this.state.shouldShowSidebar}
          toggleSidebar={this.toggleSidebar}
        />
      </div>
    )
  }
}
