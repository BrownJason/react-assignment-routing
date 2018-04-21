import React, { Component } from 'react'

import Modal from './Modal'

class Container extends Component {
  render () {
    return (
      <div>
        <h1>Yo</h1>
        <Modal isModal={false} />
      </div>
    )
  }
}

export default Container
