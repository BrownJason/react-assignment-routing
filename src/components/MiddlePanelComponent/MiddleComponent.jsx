import React, { Fragment } from 'react'
import TweetTimeline from './MiddleComponents/TweetTimeLineComponent'
import TweestsComponent from './MiddleComponents/TweetsComponent'
import { middlePanel } from './MiddlePanel.css'

const middleComponent = () => (
  <Fragment>
    <div className={`${middlePanel} top-tweetTimeline`}>
      <TweetTimeline />
      <TweestsComponent />
    </div>
  </Fragment>
)

export default middleComponent
