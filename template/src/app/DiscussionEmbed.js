/*
 * Adapted from https://github.com/ryanvalentin/disqus-react/blob/master/src/DiscussionEmbed.jsx
*/

import React from 'react'

const DOC = window.document

function insertScript(src, id, parentElement) {
  const script = DOC.createElement('script')
  script.async = true
  script.src = src
  script.id = id
  parentElement.appendChild(script)

  return script
}

function removeScript(id, parentElement) {
  const script = DOC.getElementById(id)
  if (script) {
    parentElement.removeChild(script)
  }
}

export default class DiscussionEmbed extends React.Component {
  componentWillMount() {
    if (
      window.disqus_shortname &&
      window.disqus_shortname !== this.props.shortname
    )
      this.cleanInstance()
  }

  componentDidMount() {
    this.loadInstance()
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.shortname !== nextProps.shortname) return true

    const nextConfig = nextProps.config
    const config = this.props.config
    if (
      nextConfig.url === config.url ||
      nextConfig.identifier === config.identifier
    )
      return false
    return true
  }

  componentWillUpdate(nextProps) {
    if (this.props.shortname !== nextProps.shortname) this.cleanInstance()
  }

  componentDidUpdate() {
    this.loadInstance()
  }

  loadInstance() {
    if (DOC.getElementById('dsq-embed-scr')) {
      window.DISQUS.reset({
        reload: true,
        config: this.getDisqusConfig(this.props.config),
      })
    } else {
      window.disqus_config = this.getDisqusConfig(this.props.config)
      window.disqus_shortname = this.props.shortname
      insertScript(
        `https://${this.props.shortname}.disqus.com/embed.js`,
        'dsq-embed-scr',
        DOC.body
      )
    }
  }

  cleanInstance() {
    removeScript('dsq-embed-scr', DOC.body)
    window.DISQUS.reset({})
    try {
      delete window.DISQUS
    } catch (error) {
      window.DISQUS = undefined
    }
    const disqusThread = DOC.getElementById('disqus_thread')
    if (disqusThread) {
      while (disqusThread.hasChildNodes())
        disqusThread.removeChild(disqusThread.firstChild)
    }
  }

  getDisqusConfig(config) {
    return function() {
      this.page.identifier = config.identifier
      this.page.url = config.url
      this.page.title = config.title
      this.callbacks.onNewComment = [config.onNewComment]
    }
  }

  render() {
    return <div id="disqus_thread" />
  }
}
