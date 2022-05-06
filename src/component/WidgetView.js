import '../style/WidgetView.css'
import React from 'react'
import MyGroups from './MyGroups'
import Trending from './Trending'

function WidgetView() {
  return (
    <div id='widget'>
      <MyGroups />
      <Trending />
    </div>
  )
}

export default WidgetView