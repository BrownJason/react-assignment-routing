import React, { Component, Fragment } from 'react'
import LeftComponent from '../LeftPanelComponent/LeftComponent'
import MiddleComponent from '../MiddlePanelComponent/MiddleComponent'
import RightComponent from '../RightPanelComponent/RightComponent'

import styles from './HomeComponent.css'

import JessicaJones from '../../images/jessica-jones.jpg'
import Marvel from '../../images/Marvel.png'
import BlankSpace from '../../images/blank-space.jpg'

class HomeComponent extends Component {
  state = {
    followerComponent: [
      {
        img: JessicaJones,
        h5: 'Jessica Jones',
        span: '@OfficalJessicaJones'
      },
      {
        img: Marvel,
        h5: 'Marvel Studios',
        span: '@MarvelStudios'
      },
      {
        img: BlankSpace,
        h5: 'Chris Shivers',
        span: '@ChrisShiversTaySwiftfan101'
      }
    ],

    trendingComponent: [
      {
        h4Text: 'Some Trend',
        pText: 'Some text of the trend'
      },
      {
        h4Text: 'Does that exist',
        pText: 'Not sure, click to find out'
      }
    ]
  }

  render () {
    return (
      <Fragment>
        <div className={styles.outer}>
          <div className={styles.outerContent}>
            <div className={styles.container}>
              <LeftComponent trend={this.state.trendingComponent} />
              <MiddleComponent />
              <RightComponent follower={this.state.followerComponent} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default HomeComponent
