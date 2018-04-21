import React, { Fragment } from 'react'
import { leftPanel, margin } from '../../LeftPanelComponent/LeftPanel.css'
import TrendingComponent from '../../LeftPanelComponent/TrendingComponent'

const notifLeftPanel = props => (
  <Fragment>
    <div className={`${leftPanel} ${margin}`}>
      <TrendingComponent trend={props.trend} />
    </div>
  </Fragment>
)

export default notifLeftPanel
