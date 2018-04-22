import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {
  tweetUser1
} from '../../MiddlePanelComponent/MiddleComponents/TweetTimeline.css'

import { allOrMe, buttonTweet, tweetTimeLine, active } from './NotifTweets.css'

const notifTweets = () => (
  <Fragment>
    <div className={tweetTimeLine}>
      <div className={tweetUser1}>
        <ul className={allOrMe}>
          <li id='all'>
            <NavLink
              activeClassName={active}
              className={buttonTweet}
              to='/notifications'
            >
              All
            </NavLink>
          </li>
          <li id='me'>
            <NavLink
              activeClassName='is-active'
              className={buttonTweet}
              to='/mentions'
            >
              Mentions
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
)

export default notifTweets
