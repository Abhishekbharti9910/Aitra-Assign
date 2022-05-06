import React from 'react'
import '../style/Feed.css'
import FeedOwnerTemplate from '../utility/FeedOwnerTemplate'
import FeedMain from '../utility/FeedMain'
import feedImg1 from '../image/feed1.jpg'

function Feed() {
  return (
    <div id='feed-container'>
        <FeedOwnerTemplate name="Vikrant Messy"  location="Bihar(S)" image={feedImg1} day={20}/>
        <FeedMain />
    </div>
  )
}

export default Feed