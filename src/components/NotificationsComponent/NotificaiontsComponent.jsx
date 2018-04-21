import React, { Component, Fragment } from 'react'
import styles from '../HomeComponent/HomeComponent.css'

import NotifLeftPanel from './NotifLeftPanel/NotifLeftPanel'
import RightComponent from '../RightPanelComponent/RightComponent'

import JessicaJones from '../../images/jessica-jones.jpg'
import Marvel from '../../images/Marvel.png'
import BlankSpace from '../../images/blank-space.jpg'
import Cats from '../../images/cats.jpg'
import NotifMiddle from './NotifMiddle/NotifMiddle'

class notificationsComponent extends Component {
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
      },
      {
        img: Cats,
        h5: 'Will Marttala',
        span: '@TheRealWill'
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
              <NotifLeftPanel trend={this.state.trendingComponent} />
              <NotifMiddle />
              <RightComponent follower={this.state.followerComponent} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default notificationsComponent
