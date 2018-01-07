import React, { Component } from 'react'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import parsedEntries from './parsedEntries'
import { snakeCaseToTitle, stripSlashes } from './utils'

export default class EntryNavItems extends Component {
  wrapInLink(content, entry) {
    return (
      <LinkContainer key={entry.path} to={`/${stripSlashes(entry.path)}/`}>
        {content}
      </LinkContainer>
    )
  }

  generateNavItem(entry) {
    return <NavItem onClick={this.props.onItemClick}>{entry.title}</NavItem>
  }

  generateNavDropdown(topLevelPathSegment) {
    return (
      <NavDropdown
        key={topLevelPathSegment}
        id={topLevelPathSegment}
        title={snakeCaseToTitle(topLevelPathSegment)}>
        {parsedEntries.byTopLevelPathSegment[topLevelPathSegment].map(entry =>
          this.wrapInLink(this.generateMenuItem(entry), entry)
        )}
      </NavDropdown>
    )
  }

  generateMenuItem(entry) {
    return <MenuItem onClick={this.props.onItemClick}>{entry.title}</MenuItem>
  }

  render() {
    return (
      <Nav>
        {this.props.children}
        {parsedEntries.uniqueTopLevelPathSegments
          .sort()
          .map(topLevelPathSegment => {
            const entry =
              parsedEntries.byTopLevelPathSegment[topLevelPathSegment]
            if (
              parsedEntries.nestedTopLevelPathSegments.indexOf(
                topLevelPathSegment
              ) !== -1
            ) {
              return this.generateNavDropdown(topLevelPathSegment)
            } else {
              return this.wrapInLink(this.generateNavItem(entry), entry)
            }
          })}
      </Nav>
    )
  }
}
