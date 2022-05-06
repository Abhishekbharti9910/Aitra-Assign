import React from 'react'
import '../style/Feed.css'
import FeedOwnerTemplate from '../utility/FeedOwnerTemplate'
import FeedMain from '../utility/FeedMain'

function Feed(props) {
  return (
    <div id='feed-container'>
        <FeedOwnerTemplate name={props.name}  location={props.location} image={props.proImg} day={props.day}/>
        <FeedMain para={props.para} image={props.image} like={props.like} dislike={props.dislike} comment={props.comment}/>
    </div>
  )
}

export default Feed