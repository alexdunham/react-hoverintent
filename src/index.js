import React, { Component } from 'react'
import { render } from 'react-dom'
import classnames from 'classnames'
import HoverIntent from './components/index'

require('./style.scss')

class App extends Component {
  constructor() {
    super()
    this.state = { mouseover: false }
  }
  onMouseOver = () => {
    this.setState({ mouseover: true })
  }
  onMouseOut = () => {
    this.setState({ mouseover: false })
  }
  render() {
    const { mouseover } = this.state
    return (
      <div className='container'>
        <HoverIntent
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          <ul>
            <li>
              Hover
              <span className={classnames('popover', { 'open': mouseover })}>Hover</span>
            </li>
          </ul>
        </HoverIntent>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
