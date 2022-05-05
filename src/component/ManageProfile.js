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
            <h2>Stevie Blight</h2>
            <p>Director Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        
        <div id='pop-stats'>
            <div className='followers pop-stats-child'>
                <h3>Followers</h3>
                <span>523</span>
            </div>    
            <div className='followers pop-stats-child'>
                <h3>Followers</h3>
                <span>523</span>
            </div>    
        </div>
        <h4 id='manage-profile'>Manage profile</h4>
    </div>
  )
}

export default ManageProfile