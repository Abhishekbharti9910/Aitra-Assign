import React from 'react'
import '../style/LeftPane.css'
import ManageProfile from './ManageProfile'
import PeopleYouKnow from './PeopleYouKnow'


function LeftPane() {
  return (
    <div id='left-pane'>
        <ManageProfile />
        <PeopleYouKnow />
    </div>
  )
}

export default LeftPane