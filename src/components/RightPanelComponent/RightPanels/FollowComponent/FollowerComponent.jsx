import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { follow, followers } from './Follow.css'

class FollowComponent extends Component {
  render () {
    return (
      <li className={follow}>
        <img src={`${this.props.img}`} alt='' />
        <div className={followers}>
          <h5>{this.props.h5}</h5>
          <span>{this.props.span}</span>
        </div>
      </li>
    )
  }
}

FollowComponent.propTypes = {
  img: PropTypes.img,
  h5: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired
}

export default FollowComponent
