import React, { Component, Fragment } from 'react'
import { Nav } from './Nav.css'
import HomeComponent from '../../HomeComponent/HomeComponent'
import { NavLink } from 'react-router-dom'
import MomentsComponent from '../../MomentsComponent/MomentsComponent'
// import NotificationsComponent
//   from '../../NotificationsComponent/NotificaiontsComponent'

class nagivationComponent extends Component {
  render () {
    const { location } = this.props
    return (
      <Fragment>
        <ul className={Nav}>
          <li>
            <NavLink exact to='/' activeStyle={{ textDecoration: 'none', color: 'black'}} component={HomeComponent}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to='/moments' activeStyle={{ textDecoration: 'none', color: 'black'}} component={MomentsComponent}>
              Moments
            </NavLink>
          </li>
          <li>
            <NavLink to={'/notifications' || '/mentions'} activeStyle={{ textDecoration: 'none', color: 'black'}} component={HomeComponent}>
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: location, state: { modal: true } }} >
              Messages
            </NavLink>
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default nagivationComponent
