import React from 'react';
import requests, { BASE_IMAGE_UTL } from '../../constant/api';
import useFetchData from '../../customHook/useFetchData';
import './style.css';

function TvRank() {
  const { data } = useFetchData(requests.fetchTvTopRated, 'tvRank');

  return (
    <div className="tvrank">
      <h3>高分榜</h3>
      <div className="rank__area">
        {data.map((movie) => {
          return (
            <div key={movie.id} className="single__rank">
              <img src={`${BASE_IMAGE_UTL}${movie.poster_path}`} />
              <div className="rank__desc">
                <div className="rank__title">
                  <h4>{movie.name}</h4>
                  <h6>{movie.original_name}</h6>
                </div>
                <div className="score__area">
                  <h4 className="score">{movie.vote_average}</h4>
                  <h6 className="score__name">評分</h6>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ textAlign: 'center' }}>查看更多</div>
      </div>
    </div>
  );
}

export default TvRank;
