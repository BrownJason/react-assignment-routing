import React, { Fragment } from 'react'
import { middlePanel } from '../../MiddlePanelComponent/MiddlePanel.css'
import NotifTweets from '../NotifTweets/NotifTweets'
import TweestsComponent
  from '../../MiddlePanelComponent/MiddleComponents/TweetsComponent'

const notifMiddle = () => (
  <Fragment>
    <div className={`${middlePanel} top-tweetTimeline`}>
      <NotifTweets />
      <TweestsComponent />
    </div>
  </Fragment>
)

export default notifMiddle
