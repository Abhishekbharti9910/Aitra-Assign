import '../style/Main.css'
import React from 'react'
import Post from './Post'
import Feed from './Feed'
import feedImg1 from '../image/feed1.jpg'
import feedImg from '../image/feedMain.jpg'
import MainPages from './MainPages'


function Main() {

  const para1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero expedita reprehenderit veniam molestias deleniti ex, doloremque a in provident sapiente, facere natus recusandae possimus quam perspiciatis veritatis amet velit"


  return (
    <main id='main-container'>
        <Post />
        <MainPages />
        <Feed
         name="Vikrant Messy"  location="Bihar(S)" proImg={feedImg1} day={20}
         para={para1} like={230} dislike={10} comment={9}
        />
        <Feed
         name="Vikrant Messy"  location="Bihar(S)" proImg={feedImg1} day={20}
         para={para1} image={feedImg} like={230} dislike={10} comment={9}
        />
        <Feed
         name="Vikrant Messy"  location="Bihar(S)" proImg={feedImg1} day={20}
         para={para1} image={feedImg} like={230} dislike={10} comment={9}
        />
    </main>
  )
}
 
export default Main