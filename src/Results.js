import React from 'react';
import Meaning from './Meaning.js';
import Phonetic from './Phonetic.js';

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2> {props.results.word}</h2>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          //   return meaning.definitions[0].definition;
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
