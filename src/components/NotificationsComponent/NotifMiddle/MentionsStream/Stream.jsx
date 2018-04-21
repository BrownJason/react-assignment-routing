import React, { Fragment } from 'react'
import {
  streamItems,
  header,
  tweetIcon,
  tweetImage,
  tweeters,
  userTag,
  bold,
  message
} from '../../../MiddlePanelComponent/MiddleComponents/StreamComponent/Stream.css'

const streamComponentTwo = () => (
  <Fragment>
    <div className={streamItems}>
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
          <span>'Poop train' cleared</span>
        </div>
        <a href='https://www.nbcnews.com/news/us-news/poop-train-carrying-human-waste-cleared-after-months-squatting-alabama-n867426'>
          <img
            className={tweetImage}
            src={require('../../../../images/poop-train.jpg')}
            alt=''
          />
        </a>
      </div>
    </div>
  </Fragment>
)

export default streamComponentTwo
