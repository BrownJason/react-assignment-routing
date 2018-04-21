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
} from './Stream.css'

import { Link } from 'react-router-dom'

const streamComponent = () => (
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
        <Link to='https://www.nbcnews.com/news/us-news/poop-train-carrying-human-waste-cleared-after-months-squatting-alabama-n867426'>
          <img
            className={tweetImage}
            src={require('../../../../images/poop-train.jpg')}
            alt=''
          />
        </Link>
      </div>

      <div className={tweeters}>
        <img
          className={tweetIcon}
          float='left'
          src={require('../../../../images/profilePic.jpeg')}
          alt=''
        />
        <div className={header}>
          <span className={bold}>No help for you!</span>
          <span className={userTag}> @NoOne · 30m</span>
        </div>
        <div className={message}>
          <span>A christmas tradition inverted, why would you do that?</span>
        </div>
        <Link to='https://www.nbcnews.com/nightly-news/video/a-christmas-tradition-inverted-1122780227750'>
          <img
            className={tweetImage}
            src={require('../../../../images/christmas.jpg')}
            alt=''
          />
        </Link>
      </div>
      <div className={tweeters}>
        <img
          className={tweetIcon}
          float='left'
          src={require('../../../../images/profilePic.jpeg')}
          alt=''
        />
        <div className={header}>
          <span className={bold}>No help for you!</span>
          <span className={userTag}> @NoOne · 47m</span>
        </div>
        <div className={message}>
          <span>See if the car is now stuck or if they got it out.</span>
        </div>
        <Link to='https://www.huffingtonpost.com/entry/car-crash-second-floor_us_5a5c83bde4b0fcbc3a11c033'>
          <img
            className={tweetImage}
            src={require('../../../../images/car-in-building.jpg')}
            alt=''
          />
        </Link>
      </div>
      <div className={tweeters}>
        <img
          className={tweetIcon}
          float='left'
          src={require('../../../../images/profilePic.jpeg')}
          alt=''
        />
        <div className={header}>
          <span className={bold}>No help for you!</span>
          <span className={userTag}> @NoOne · 1h </span>
        </div>
        <div className={message}>
          <span>
            You wont believe what happened to part of this 500 year old castle.
          </span>
        </div>
        <Link to='https://www.huffingtonpost.com/entry/badger-castle-scotland_us_5ad559e6e4b0edca2cbd196c'>
          <img
            className={tweetImage}
            src={require('../../../../images/angry-badger.jpeg')}
            alt=''
          />
        </Link>
      </div>
    </div>
  </Fragment>
)

export default streamComponent
