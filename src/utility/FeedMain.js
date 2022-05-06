import React from 'react'
import './style/FeedMain.css'

function FeedMain(props) {
  return (
    <div id='FeedMain'>
        <p>{props.para}</p>
        <img src={props.image} alt="" />

         <div id='feed-main-stats'>
             <div className='feed-main-stats-one'> 
                <a href="#"><i className="fa-solid fa-thumbs-up feed-main-stats-child"></i><span>{props.like}</span></a>
                <a href="#"><i className="fa-solid fa-thumbs-down feed-main-stats-child"></i><span>{props.dislike}</span></a>
                <a href="#"><i className="fa-solid fa-comment feed-main-stats-child"></i><span>{props.dislike}</span></a>
             </div>
            <div className='feed-main-stats-two'>
                <a href="#" ><i className="fa-solid fa-share-nodes active feed-main-stats-child"></i><span>Share</span></a>
            </div>
         
         </div>
    </div>
  )
}

export default FeedMain