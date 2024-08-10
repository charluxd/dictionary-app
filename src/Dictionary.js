import React, { useState } from 'react';
import './Dictionary.css';

function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div>What word would you like to look up?</div>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus="{true}"
          placeholder="Enter word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}

export default Dictionary;
