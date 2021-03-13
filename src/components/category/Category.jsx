/* eslint-disable no-unused-expressions */
import React, { useEffect, useState, useRef, createRef } from 'react';
import { tags } from '../../constant/api';
import axios from '../../API/axios';
import Poster from '../poster/Poster';
import './style.css';

const getUrl = (list) => {
  let url =
    'https://api.themoviedb.org/3/discover/movie?api_key=01e86adb5633e5446687b0c6a5d0f4c3&language=zh-TW&sort_by=popularity.desc&include_adult=true&include_video=false&page=1';

  list.map((item) => (url += `&with_genres=${item}`));

  return url;
};

function Category() {
  const tagRef = useRef(
    Array.from({ length: tags.length }).map(() => createRef()),
  );
  const [clickList, setClickList] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(getUrl(clickList));
      setMovie(res.data.results);
    };
    fetchData();
  }, [clickList]);

  return (
    <div className="category">
      <div className="tags__wrapper">
        {tags.map((tag, index) => {
          return (
            <div
              ref={tagRef.current[index]}
              key={tag.id}
              className={`tag `}
              onClick={() => {
                if (
                  tagRef.current[index].current.className.includes('active')
                ) {
                  tagRef.current[index].current.className = 'tag';
                  const deepArray = JSON.parse(JSON.stringify(clickList));
                  let idx = deepArray.indexOf(tag.id);
                  deepArray.splice(idx, 1);
                  setClickList(deepArray);
                } else {
                  tagRef.current[index].current.className = 'tag active';
                  setClickList((preState) => [...preState, tag.id]);
                }
              }}
            >
              {tag.name}
            </div>
          );
        })}
      </div>
      <div className="posterlist">
        {movie.length &&
          movie.map((item) => {
            return <Poster key={item.id} data={item} />;
          })}
      </div>
    </div>
  );
}

export default Category;
