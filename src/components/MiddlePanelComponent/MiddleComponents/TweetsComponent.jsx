import React, { Fragment } from 'react'
import StreamComponent from './StreamComponent/Stream'
import { streamTweets } from './Tweets.css'

const tweestsComponent = () => (
  <Fragment>
    <div className={streamTweets}>
      <div className='streaming'>
        <StreamComponent />
      </div>
    </div>
  </Fragment>
)

export default tweestsComponent
