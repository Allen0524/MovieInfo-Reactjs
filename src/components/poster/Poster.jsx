import React, { useState } from 'react';
import './style.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Link } from 'react-router-dom';

const BASE_IMAGE_UTL = 'https://image.tmdb.org/t/p/w500/';

function Poster({ data }) {
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleTrailClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.original_title || '')
        .then((url) => {
          const urlParams = new URL(url);

          setTrailerUrl(urlParams.searchParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  console.log('poster');
  return (
    <>
      <div className="poster">
        <div className="pic__wrapper">
          <img
            className="poster__pic"
            src={`${BASE_IMAGE_UTL}${data.poster_path}`}
            alt={data.title}
            loading="lazy"
          />
        </div>
        <div className="poster__right">
          <div className="right__title">
            <div className="title-group">
              <Link
                style={{ textDecoration: 'none', color: '#fff' }}
                to={`/movies/${data.id}`}
              >
                <div className="title">{data.title}</div>
                <div className="engTitle">{data.original_title}</div>
              </Link>
            </div>
            <div>評分：{data.vote_average}</div>
          </div>
          {/* <div></div> */}
          <div>{data.overview}</div>
          <div className="trailer" onClick={() => handleTrailClick(data)}>
            預告片
          </div>
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
}

export default Poster;
