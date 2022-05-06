import '../style/Main.css'
import React from 'react'
import Post from './Post'
import Feed from './Feed'

function Main() {
  return (
    <main id='main-container'>
        <Post />
        <Feed />
    </main>
  )
}
 
export default Main