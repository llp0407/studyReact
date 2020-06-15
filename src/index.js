import React from 'react'
import {render} from 'react-dom'

import App from './App'
import * as services from './services'
React.Component.prototype.http = services

render(
    <App/>,
    document.querySelector('#root')
)