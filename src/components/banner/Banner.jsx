/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import axios from '../../API/axios';
import requests from '../../constant/api';
import './style.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState(true);

  const scrollDown = () => {
    // window.scroll(0, 100);
    console.log(window.innerHeight);
    window.scrollTo({ top: innerHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(requests.fetchRendomTv);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ],
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    const _listerFun = () => {
      if (window.scrollY > 80) {
        setShow(false);
      } else setShow(true);
    };
    window.addEventListener('scroll', _listerFun);
    return () => {
      window.removeEventListener('scroll', _listerFun);
    };
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1>{movie.name}</h1>
        <h2>{movie?.overview}</h2>
      </div>
      <div className="banner__fade">
        <div
          className={`scroll__area ${!show && 'hidden  '}`}
          onClick={scrollDown}
        >
          <div className="scrollText">{'scroll'}</div>
          <img
            style={{ width: '25px' }}
            src="https://cdn4.iconfinder.com/data/icons/action-hand-drawn-color/64/arrow-down-512.png"
          />
        </div>
      </div>
    </header>
  );
}

export default Banner;
