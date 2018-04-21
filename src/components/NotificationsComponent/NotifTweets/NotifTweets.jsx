import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {
  tweetUser
} from '../../MiddlePanelComponent/MiddleComponents/TweetTimeline.css'

import { t1FormTweet, allOrMe, buttonTweet } from './NotifTweets.css'

const notifTweets = () => (
  <Fragment>
    <div className='tweetTimeline'>
      <div className={tweetUser}>
        <form action='' className={t1FormTweet}>
          <ul className={allOrMe}>
            <li id='all'>
              <NavLink className={buttonTweet} to='/notifications'>
                All
              </NavLink>
            </li>
            <li id='me'>
              <NavLink className={buttonTweet} to='/mentions'>
                Mentions
              </NavLink>
            </li>
          </ul>
        </form>
      </div>
    </div>
  </Fragment>
)

export default notifTweets
