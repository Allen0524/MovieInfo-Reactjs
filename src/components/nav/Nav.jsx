import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PosterList from '../posterList/PosterList';
import './style.css';

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const _listerFun = () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else setShow(false);
    };
    window.addEventListener('scroll', _listerFun);
    return () => {
      window.removeEventListener('scroll', _listerFun);
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav__bg'}`}>
      <div className="main">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://cdn1.iconfinder.com/data/icons/entertainment-16/48/26-mask_drama-512.png"
          />
        </Link>
        <ul className="nav__menu">
          <li>關於</li>
          {/* <li>
            <Link
              style={{ textDecoration: 'none', color: '#fff' }}
              to="/movieList"
            >
              電影列表
            </Link>
            <ul className="drop">
              <li>現正熱映</li>
              <li>最受歡迎</li>
              <li>最高評分</li>
            </ul>
          </li> */}
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to="/searchMovie"
          >
            <li>電影查詢</li>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to="/category"
          >
            <li>電影類別查詢</li>
          </Link>
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to="/trending"
          >
            <li>趨勢熱門</li>
          </Link>
        </ul>
        <a href="https://github.com/Allen0524" target="_blank">
          <img
            style={{ width: '25px', backgroundColor: '#fff' }}
            className="nav__logo"
            src="https://cdn3.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_GitHub-512.png"
          />
        </a>
      </div>
    </div>
  );
}

export default Nav;
