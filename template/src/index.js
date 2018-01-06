import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-snapshot'

import './app/style/App.css'
import App from './app/App'
import registerServiceWorker from './app/registerServiceWorker'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
