import React from 'react'
import '../style/ManageProfile.css'
import profilePic from '../image/profile.jpg'
import profileBack from '../image/profileBack.png'



function ManageProfile(props) {
  return (
    <div class="card">
        <img src={profileBack} id="profile-back" />
        <img src={profilePic}  id="profile-pic" alt="profile pic" />
        <div class="details">
            <h2>{props.name}</h2>
            <p>{props.para}</p>
        </div>
        
        <div id='pop-stats'>
            <div className='followers pop-stats-child'>
                <h3>Followers</h3>
                <span>{props.followers}</span>
            </div>    
            <div className='followers pop-stats-child'>
                <h3>Following</h3>
                <span>{props.following}</span>
            </div>    
        </div>
        <h4 id='manage-profile'>Manage profile</h4>
    </div>
  )
}

export default ManageProfile