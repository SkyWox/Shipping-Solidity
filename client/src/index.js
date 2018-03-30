import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import FaceSmash from './FaceSmash'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<FaceSmash />, document.getElementById('root'))
registerServiceWorker()
