import React, { Fragment } from 'react'
import NavigationComponent from './SubNavComponets/NavigationComponent'
import SearchBar from './SubNavComponets/SearchBarComponent'
import styles, { coolIcon } from './NavComponet.css'

const navComponent = () => (
  <Fragment>
    <div className={styles.topbar}>
      <div className={styles.globalNav}>
        <div className={styles.globalNavInner}>
          <div className={styles.navContainer}>
            <div role='navigation'>
              <NavigationComponent />
            </div>
            <span className={coolIcon}>
              <img src={require('../../images/cool-icon.jpg')} alt='' />
            </span>
            <div className={`${styles.pullRight} ${styles.navExtras}`}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)

export default navComponent
