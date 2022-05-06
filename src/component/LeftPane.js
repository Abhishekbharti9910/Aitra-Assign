import React from 'react'
import '../style/LeftPane.css'
import ManageProfile from './ManageProfile'
import PeopleYouKnow from './PeopleYouKnow'


function LeftPane() {
  const para = "Director Lorem ipsum dolor sit amet, consectetur adipiscing elit"

  return (
    <div id='left-pane'>
        <ManageProfile name="Nandni Modi" para={para} followers={223} following={453}/>
        <PeopleYouKnow />
    </div>
  )
}

export default LeftPane