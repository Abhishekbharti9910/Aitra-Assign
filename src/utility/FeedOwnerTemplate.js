import React from 'react'
import './style/FeedOwnerTemplate.css'
import shieldImg from '../image/shield.svg'

function FeedOwnerTemplate(props) {
  return (
    <div id='FeedOwnerTemplate-container'>
        <div className="FeedOwnerTemplate-left">
            <img src={props.image} />
        </div>

        <div className="FeedOwnerTemplate-mid">
            <p className='FeedOwnerTemplate-mid-child-one'>{props.name}
                <img src={shieldImg} alt="" srcset="" />
            </p>
            
            <div className='FeedOwnerTemplate-mid-child-two'>
                <p>{props.location}</p>
                <li>Problem</li>
                <li className='active'>Government</li>
            </div>
        </div>

        <div className="FeedOwnerTemplate-right">
            <p>{props.day} days ago</p>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
    </div>
  )
}

export default FeedOwnerTemplate