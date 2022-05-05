import React from 'react'
import './style/MyGroupTemplate.css'

function MyGroupsTemplate(props) {
  return (
    <div id='MyGroupsTemplate-container'>

        <div className='MyGroupsTemplate-child-one'>
            <h3>{props.name}</h3>
            <div>{props.location}</div>

        </div>
        <div className='MyGroupsTemplate-child-two'>
            <div>
                <span>Members</span>
                <p>{props.members}K</p>
            </div>
            <div>
                <span>Posts</span>
                <p>{props.posts}K</p>
            </div>
        </div>
    </div>
  )
}

export default MyGroupsTemplate