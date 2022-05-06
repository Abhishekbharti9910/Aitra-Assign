import React from 'react'
import './style/PeopleKnowCard.css'

function PeopleKnowCard(props) {
  return (
    <div id="people-know-card-container">

      <div className="people-know-card-left">
        <img src={props.img} />
      </div>

      <div className="people-know-card-mid">
        <p className="people-know-card-mid-child-one">
          {props.name}
        </p>

        <div className="people-know-card-mid-child-two">
          <p>{props.designation}</p>
        </div>
      </div>

      <div className="people-know-card-right">
            follow
      </div>

    </div>
  );
}

export default PeopleKnowCard