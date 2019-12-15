import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from '../public/registerServiceWorker'

// const React = require('react')
// const ReactDOM = require('react-dom')

// const data = { name: 'world' }

// function helloTemplate (props) {
//   return (
//     <div>hello {props.name}</div>
//   )
// }
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
// const view = helloTemplate(data)

// const placeToMount = document.getElementById('root')

// ReactDOM.render(view, placeToMount)
