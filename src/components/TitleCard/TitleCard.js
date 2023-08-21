import React from 'react';
import './TitleCard.css';
import Fade from 'react-reveal/Fade';

function TitleCard(props) {
  return (
    <Fade fraction={0.5}>
      <div className="titleContainer">{props.text}</div>
    </Fade>
  );
}

export default TitleCard;
