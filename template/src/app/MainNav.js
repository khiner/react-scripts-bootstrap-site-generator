import React, { Component } from 'react'
import { MenuItem, Nav, Navbar, NavDropdown, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import config from '../config'

import EntryNavItems from './EntryNavItems'
import MailChimpEmailSignup from './follow_and_share/MailChimpEmailSignup'
import ShareButtons from './follow_and_share/ShareButtons'

export default class MainNav extends Component {
  render() {
    return (
      <Navbar default fixedTop collapseOnSelect>
        {config.entriesInSidebar && (
          <a className="showSidebar">
            <Glyphicon glyph="list" onClick={this.props.onShowSidebarClicked} />
          </a>
        )}
        <Navbar.Header>
          <Navbar.Brand
            className={config.entriesInSidebar ? 'leaveLeftSpace' : ''}>
            <Link to="/">{config.siteName}</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {!config.entriesInSidebar && <EntryNavItems />}
          <Nav pullRight>
            {config.topLevelLinks &&
              // TODO change to NavItem when new version (> 0.31.5) of react-bootstrap is available
              config.topLevelLinks.map(topLevelLink => (
                <MenuItem
                  key={topLevelLink.label}
                  href={topLevelLink.href}
                  target="_blank">
                  {topLevelLink.label}
                </MenuItem>
              ))}
            {(config.showShareNavItem ||
              (config.mailChimpFormAction && config.mailChimpInputName)) && (
              <NavDropdown
                title={
                  config.showShareNavItem &&
                  config.mailChimpFormAction &&
                  config.mailChimpInputName
                    ? 'Share & Subscribe'
                    : config.showShareNavItem ? 'Share' : 'Subscribe'
                }
                id="share-and-subscribe">
                {config.showShareNavItem &&
                  config.host && (
                    <ShareButtons
                      title={config.shareName || config.siteName}
                      description={`${config.shareName || config.siteName}`}
                      url={config.host}
                      hideLabel={true}
                    />
                  )}
                {config.mailChimpFormAction &&
                  config.mailChimpInputName && (
                    <MailChimpEmailSignup
                      formAction={config.mailChimpFormAction}
                      inputName={config.mailChimpInputName}
                    />
                  )}
              </NavDropdown>
            )}
            {config.email && (
              <NavDropdown title="Contact" id="contact">
                <MenuItem
                  href={`mailto:${config.email}?Subject=Hello!`}
                  target="_blank">
                  {config.email}
                </MenuItem>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
