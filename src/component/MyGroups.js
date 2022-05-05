import React from 'react'
import '../style/MyGroups.css'
import Template from '../utility/MyGroupsTemplate'

function MyGroups() {
  return (
    <div id='my-groups-container'>
        <div className='my-group-top'>
            <h4>MY GROUPS</h4>
            <h6>+ ADD NEW</h6>
        </div>
        {/* here we have all the contents of My groups card */}
        <div className='my-group-mid'>
            <Template name="Bharat" members={23} posts={24} location="Country" />
            <Template name="New Delhi" members={23} posts={24} location="State" />
            <Template name="Arunachal Pardesh" members={23} posts={24} location="State" />
        </div>
        
        <div className='my-group-bottom'>
            <h6>SEE ALL</h6>
        </div>
    </div>
  )
}

export default MyGroups