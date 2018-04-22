import React, { Component, Fragment } from 'react'
import LeftComponent from '../LeftPanelComponent/LeftComponent'
import MiddleComponent from '../MiddlePanelComponent/MiddleComponent'
import RightComponent from '../RightPanelComponent/RightComponent'

import styles from './HomeComponent.css'

import JessicaJones from '../../images/jessica-jones.jpg'
import Marvel from '../../images/Marvel.png'
import BlankSpace from '../../images/blank-space.jpg'
import Cats from '../../images/cats.jpg'

class HomeComponent extends Component {
  state = {
    followerComponent: [
      {
        link: 'https://twitter.com/JessicaJones',
        img: JessicaJones,
        h5: 'Jessica Jones',
        span: '@OfficalJessicaJones'
      },
      {
        link: 'https://twitter.com/Marvel',
        img: Marvel,
        h5: 'Marvel Studios',
        span: '@MarvelStudios'
      },
      {
        link: 'https://twitter.com/taylorswift13',
        img: BlankSpace,
        h5: 'Chris Shivers',
        span: '@ChrisShiversTaySwiftfan101'
      },
      {
        link: 'https://twitter.com/wmarttala',
        img: Cats,
        h5: 'Will Marttala',
        span: '@TheRealWill'
      }
    ],

    trendingComponent: [
      {
        link: 'https://twitter.com/hashtag/UFCAC?src=tren',
        h4Text: '#UFCAC',
        pText: 'Very important fights'
      },
      {
        link: 'https://twitter.com/hashtag/1299ofBetter?src=ptrn',
        h4Text: '#1299ofBetter',
        pText: 'PapaJohns!'
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
