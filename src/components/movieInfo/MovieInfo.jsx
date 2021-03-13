import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../API/axios';
import { BASE_IMAGE_UTL, BACKDROP_IMAGE_URL } from '../../constant/api';
import './style.css';

function MovieInfo() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credit, setCredit] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `movie/${movieId}?api_key=01e86adb5633e5446687b0c6a5d0f4c3&language=zh-TW`,
      );
      const crewRes = await axios.get(
        `movie/${movieId}/credits?api_key=01e86adb5633e5446687b0c6a5d0f4c3&language=zh-TW`,
      );
      setCredit(crewRes.data.cast.slice(0, 6));
      setMovie(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="movieinfo">
      {console.log('object')}
      <div
        className="detail__wrapper"
        style={{
          backgroundImage: `url(${BACKDROP_IMAGE_URL}${movie?.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className="content">
          <div>
            <img
              className="content__img"
              src={`${BASE_IMAGE_UTL}${movie?.poster_path}`}
            />
          </div>
          <div className="content__right">
            <div className="info">
              <div className="info__1">
                <div>{movie?.title}</div>
                <div style={{ fontSize: '14px' }}>{movie?.original_title}</div>
                <div>
                  <span style={{ fontSize: '14px' }}>
                    {movie?.release_date}
                    {'˙'}
                    {movie.genres &&
                      movie.genres.map((genre, index) => (
                        <span
                          style={{
                            textDecoration: 'underline',
                            textDecorationColor: '#ff8401',
                            textUnderlineOffset: '3px',
                          }}
                          key={genre.id}
                        >
                          {genre.name}
                          {index !== movie.genres.length - 1 ? ',' : null}
                        </span>
                      ))}
                  </span>
                </div>
              </div>
              <div className="score__area">
                <div className="score">{movie?.vote_average}</div>
                <div className="score__name">評分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down__wrapper">
        <div className="cast__wrapper">
          <div>演員名單</div>
          <div>
            {credit.length &&
              credit.map((cast) => {
                return (
                  <div className="crew__wrapper">
                    <div
                      style={{
                        width: '130px',
                        paddingLeft: '20px',
                        paddingBottom: '10px',
                      }}
                    >
                      <img
                        style={{ width: '80px' }}
                        src={`${BASE_IMAGE_UTL}${cast?.profile_path}`}
                      />
                      <div>{cast?.name}</div>
                    </div>
                    <div className="char__wrapper">
                      <div>飾演：{cast?.character}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="overview">
          <div>劇情介紹</div>
          <div>{movie?.overview}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
