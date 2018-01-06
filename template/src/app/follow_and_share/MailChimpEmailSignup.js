import React, { Component } from 'react'

export default class MailChimpEmailSignup extends Component {
  render() {
    const { formAction, inputName } = this.props
    if (!(formAction && inputName)) {
      return null
    }

    return (
      <div className="mailChimpEmailSignup">
        <div id="mc_embed_signup">
          <form
            action={formAction}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate>
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">I'll email you about new posts!</label>
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true">
                <input type="text" name={inputName} tabIndex="-1" value="" />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
