import React, { Fragment } from 'react'
import {
  tweetUser,
  t1FormTweet,
  textBox,
  avatarUser,
  size32,
  boxShadow
} from './TweetTimeline.css'

const tweetTimeline = props => (
  <Fragment>
    <div className={boxShadow}>
      <div className={tweetUser}>
        <img
          className={`${tweetUser} ${avatarUser} ${size32}`}
          src={require('../../../images/profilePic.jpeg')}
          alt=''
        />
        <form action='' className={t1FormTweet}>
          <input
            type='text'
            className={textBox}
            value={props.value}
            onChange={props.handleTweetChange}
            placeholder='Need to say something?'
          />
          <button type='button' onClick={props.getTweet}> Post</button>

        </form>
      </div>
    </div>
  </Fragment>
)

export default tweetTimeline
