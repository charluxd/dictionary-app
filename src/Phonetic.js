import React from 'react';
import './Phonetic.css';

function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}

export default Phonetic;
