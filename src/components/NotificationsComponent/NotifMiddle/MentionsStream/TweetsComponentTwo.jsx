import React, { Fragment } from 'react'
import StreamComponent from './Stream'
import {
  streamTweets
} from '../../../MiddlePanelComponent/MiddleComponents/Tweets.css'

const tweestsComponentTwo = () => (
  <Fragment>
    <div className={streamTweets}>
      <div className='streaming'>
        <StreamComponent />
      </div>
    </div>
  </Fragment>
)

export default tweestsComponentTwo
