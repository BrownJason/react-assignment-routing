import React, { Fragment } from 'react'
import AvatarComponent from './Profile/AvatarComponent'
import {
  profileBgContent,
  module,
  profileBg,
  profileContent
} from './Panel.css'

const profileComponent = () => (
  <Fragment>
    <div className={`${profileBgContent} ${module}`}>
      <a href='' className={profileBg}> <img src='' alt='' /></a>
      <div className={profileContent}>
        <AvatarComponent />
      </div>
    </div>
  </Fragment>
)

export default profileComponent
