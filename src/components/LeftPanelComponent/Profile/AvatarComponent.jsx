import React, { Fragment } from 'react'
import { avatarLink, inlineBlocks, avatar, profileName } from './Avatar.css'

const avatarComponent = () => (
  <Fragment>
    <a className={`${avatarLink} ${inlineBlocks}`} href=''>
      <img
        className={avatar}
        src={require('../../../images/profilePic.jpeg')}
        alt=''
      />
    </a>
    <div className={profileName}>
      <h5>No help for you!</h5>
      <span>@NoOne</span>
    </div>
  </Fragment>
)

export default avatarComponent
