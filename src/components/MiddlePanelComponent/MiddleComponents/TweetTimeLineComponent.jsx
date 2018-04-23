import React, { Fragment } from 'react'
import {
  tweetUser,
  t1FormTweet,
  textBox,
  avatarUser,
  size32,
  boxShadow
} from './TweetTimeline.css'

const tweetTimeline = () => (
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
            placeholder='Need to say something?'
          />
          <i class='fa fa-smile-o' style={{marginLeft: '-30px', fontSize: '24px', marginTop: '5px', color: 'lightgrey'}}/>

        </form>
      </div>
    </div>
  </Fragment>
)

export default tweetTimeline
