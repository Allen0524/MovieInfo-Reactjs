import React, { useState, useRef, useEffect } from 'react';
import axios from '../../API/axios';
import Poster from '../poster/Poster';
import './style.css';

function SearchMovie() {
  const [inputValue, setInputValue] = useState('天能');
  const [movie, setMovie] = useState([]);
  const inputRef = useRef('');

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);
    inputRef.current.value = '';
  };

  useEffect(() => {
    axios
      .get(
        `search/movie?api_key=01e86adb5633e5446687b0c6a5d0f4c3&language=zh-TW&query=${inputValue}&page=1&include_adult=true`,
      )
      .then((res) => setMovie(res.data.results));
  }, [inputValue]);

  return (
    <div className="searchMovie">
      <div className="search__wrapper">
        <form>
          <input type="text" ref={inputRef} placeholder="請輸入電影名稱" />
          <button onClick={handleChange}></button>
        </form>
      </div>

      <div className="posterlist">
        {movie.map((item) => (
          <Poster key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default SearchMovie;
