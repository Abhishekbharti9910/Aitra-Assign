import React from 'react'
import '../style/PeopleYouKnow.css'
import PeopleKnowCard from '../utility/PeopleKnowCard'
import img1 from '../image/know.jpg'

function PeopleYouKnow() {
  return (
    <div>
        <p>People you may know</p>
        <PeopleKnowCard
            img={img1} name="Andrie Russel" designation="manager"
        />
        <PeopleKnowCard
            img={img1} name="Andrie Russel" designation="manager"
        />
        <PeopleKnowCard
            img={img1} name="Andrie Russel" designation="manager"
        />
        <PeopleKnowCard
            img={img1} name="Andrie Russel" designation="manager"
        />
    </div>
  )
}

export default PeopleYouKnow