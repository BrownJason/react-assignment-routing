import React, { Component, Fragment } from 'react'
import {
  streamItems,
  header,
  tweeters,
  userTag,
  bold,
  message,
  border
} from './Stream.css'
import PropTypes from 'prop-types'

import Icon from './Icon'

class StreamComponent extends Component {
  render () {
    return (
      <Fragment>
        <div className={streamItems}>
          <div className={border}>
            <div className={tweeters}>
              <Icon />
              <div className={header}>
                <span className={bold}>No help for you!</span>
                <span className={userTag}> @NoOne</span>
              </div>
              <div className={message}>
                <span>{this.props.text}</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

StreamComponent.propTypes = {
  text: PropTypes.string
}

export default StreamComponent
