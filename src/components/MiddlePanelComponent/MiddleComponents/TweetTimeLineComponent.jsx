import React, { Fragment } from 'react'
import {
  tweetUser,
  t1FormTweet,
  textBox,
  avatarUser,
  size32
} from './TweetTimeline.css'

const tweetTimeline = () => (
  <Fragment>
    <div className='tweetTimeline'>
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
            placeholder='Whatch thinking?'
          />
        </form>
      </div>
    </div>
  </Fragment>
)

export default tweetTimeline
