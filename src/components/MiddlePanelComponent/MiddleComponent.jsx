import React, { Fragment } from 'react'
import TweetTimeline from './MiddleComponents/TweetTimeLineComponent'
import TweestsComponent from './MiddleComponents/TweetsComponent'
import { middlePanel } from './MiddlePanel.css'

const middleComponent = props => (
  <Fragment>
    <div className={`${middlePanel} top-tweetTimeline`}>
      <TweetTimeline tweeting={props.tweeting} change={props.change} />
      <TweestsComponent tweet={props.tweet} />
    </div>
  </Fragment>
)

export default middleComponent
