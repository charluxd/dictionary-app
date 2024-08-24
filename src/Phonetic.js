import react from 'react';

function Phonetic(props) {
  console.log(props.Phonetic);

  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}

export default Phonetic;
