import React, { Component } from 'react'

import EntryNavItems from './EntryNavItems'

export default class Sidebar extends Component {
  render() {
    return (
      <div className={`sidebar ${this.props.shouldShow ? 'show' : ''}`}>
        <EntryNavItems onItemClick={this.props.toggle}>
          <div className="sidebarHeader">
            <h3>Posts</h3>
          </div>
        </EntryNavItems>
      </div>
    )
  }
}
