import React from 'react'
import '../style/Post.css'
import profilePic from '../image/profile.jpg'

function Post() {
  return (
    <div id="post">
         
        <div className='post-child-top'>
            <img src={profilePic} alt="profile pic" srcset="" />
            <input type="text" placeholder='Write something ...' />
        </div>

        <div className='post-child-bottom'>
              <div className="post-child-bottom-left">
                <li> <a href="#">  <i class="fa-solid fa-image"></i> </a> </li>
                <li id='youtube'> <a href="#" >  <i class="fa-brands fa-youtube"></i></a> </li>
                <li> <a href="#" >  <i class="fa-solid fa-video"></i> </a> </li>
                <li> <a href="#" >  <i class="fa-solid fa-square-poll-vertical"></i> </a> </li>

              </div>

              <div className="post-child-bottom-right">

                <li id='post-btn'> <a href="#">  <i class="fa-solid fa-paper-plane"></i> </a> </li>
              
              </div>
        </div>
    </div>
  )
}

export default Post