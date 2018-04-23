import React, { Component, Fragment } from 'react'
import StreamComponent from './StreamComponent/Stream'
import { streamTweets } from './Tweets.css'
import PropTypes from 'prop-types'

class TweestsComponent extends Component {
  render () {
    return (
      <Fragment>
        <div className={streamTweets}>
          <div className='streaming'>
            {this.props.tweet.map(tweets => (
              <StreamComponent
                key={Math.random(Math.floor(1000))}
                text={tweets.text}
              />
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

TweestsComponent.propTypes = {
  tweet: PropTypes.object
}

export default TweestsComponent
