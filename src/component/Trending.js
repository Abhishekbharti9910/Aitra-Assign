import React from 'react'
import '../style/Trending.css'
import TrendingTemplate from '../utility/TrendingTemplate'
import trend1 from '../image/trend1.jpg'

function Trending() {
    const temp1Title = "Did you procreate change the new illustaration and when ?"

  return (
    <div id='trending-container'>
        <div className='trending-top'>
            <p>TRENDING ISSUES</p>
        </div>

        {/* here the whole trending templates component will inserted */}
        <div className='trending-mid'>
            <TrendingTemplate num={1} title={temp1Title} img={trend1} location="Dharbhanga" genra="politics" comment={342}/>
            <TrendingTemplate num={2} title={temp1Title} img={trend1} location="Dharbhanga" genra="politics" comment={342}/>
            <TrendingTemplate num={3} title={temp1Title} img={trend1} location="Dharbhanga" genra="politics" comment={342}/>
        </div>

        <div className='trending-bottom'>
            <button id='trending-view-all-btn'>VIEW ALL</button>
        </div>
    </div>
  )
}

export default Trending