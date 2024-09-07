import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import './Dictionary.css';

function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      'r7XAa6gImayiK2EWtw0IebkdhFhXPg1GfPFC91GkiCLPjtBOAbzFKufl';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <div>What word would you like to look up?</div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="{true}"
              placeholder="Enter word"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return 'loading';
  }
}

export default Dictionary;
