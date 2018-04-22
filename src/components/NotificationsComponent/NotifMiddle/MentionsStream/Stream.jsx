import React, { Fragment } from 'react'
import {
  streamItems,
  header,
  tweetIcon,
  tweeters,
  userTag,
  bold,
  message,
  border
} from '../../../MiddlePanelComponent/MiddleComponents/StreamComponent/Stream.css'
import { Link } from 'react-router-dom'

const streamComponentTwo = () => (
  <Fragment>
    <div className={streamItems}>
      <div className={border}>
        <div className={tweeters}>
          <img
            className={tweetIcon}
            float='left'
            src={require('../../../../images/profilePic.jpeg')}
            alt=''
          />
          <div className={header}>
            <span className={bold}>No help for you!</span>
            <span className={userTag}> @NoOne · 5m</span>
          </div>
          <div className={message}>
            <span>
              Hey, did you ever figure out how to get the modal working with react?
              <Link to='#'>@WillMarttala</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default streamComponentTwo
