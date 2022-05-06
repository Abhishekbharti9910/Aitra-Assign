import React from 'react'
import './style/TrendingTemplate.css'

function TrendingTemplate(props) {
  return (
    <div id='TrendingTemplate-container'>
        <div className='TrendingTemplate-left'>
            <p>{props.num}.</p>
        </div>

        <div className='TrendingTemplate-mid'>
            <div>
                <p className='TrendingTemplate-tile'>{props.title}</p>
            </div>
            <div className='TrendingTemplate-stats'>
                <div>
                    <p>{props.location}</p>
                    <li>{props.genra}</li>
                </div>
                <i class="fa-solid fa-comment"><span>{props.comment}</span></i>
            </div>

        </div>
        <div className='TrendingTemplate-right'>
            <img src={props.img} alt="news" srcset="" />
        </div>
    </div>
  )
}

export default TrendingTemplate