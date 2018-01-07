import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import SummaryList from './SummaryList'
import Entry from './Entry'
import { stripSlashes } from './utils'

import config from '../config'
import parsedEntries from './parsedEntries'

export default class MainContent extends Component {
  generateComponent(entry) {
    return props => {
      return <Entry {...entry}>{entry.content}</Entry>
    }
  }

  generateRoute(entry) {
    return (
      <Route
        key={entry.path}
        path={`/${stripSlashes(entry.path)}`}
        render={this.generateComponent(entry)}
      />
    )
  }

  render() {
    return (
      <div className="contentWrapper">
        {config.entriesInSidebar && (
          <Sidebar
            shouldShow={this.props.shouldShowSidebar}
            toggle={this.props.toggleSidebar}
          />
        )}
        <Route exact path="/" component={SummaryList} />
        {parsedEntries.all.map(entry => this.generateRoute(entry))}
      </div>
    )
  }
}
