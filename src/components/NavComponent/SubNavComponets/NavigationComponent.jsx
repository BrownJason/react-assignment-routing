import React, { Fragment } from 'react'
import { Nav } from './Nav.css'

const nagivationComponent = props => (
  <Fragment>
    <ul className={Nav}>
      <li>
        <a href='./index.html'>Home</a>
      </li>
      <li>
        <a href='./moments.html'>Moments</a>
      </li>
      <li>
        <a href='./notifications.html'>Notifications</a>
      </li>
      <li>
        <a href='./message.html'>Messages</a>
      </li>
    </ul>
  </Fragment>
)

export default nagivationComponent
