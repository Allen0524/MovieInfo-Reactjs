import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import requests, { BASE_IMAGE_UTL } from '../../constant/api';
import useFetchData from '../../customHook/useFetchData';
import './style.css';

function LiveNews() {
  const { data } = useFetchData(requests.fetchNowPlaying, 'liveNews');

  return (
    <div className="livenews">
      <h3>
        {'----->'}現正熱映中{'<-----'}
      </h3>
      {data.length && (
        <OwlCarousel
          className="owl-theme"
          loop
          margin={0}
          nav
          autoplay
          autoplayHoverPause
        >
          {data.map((item) => {
            return (
              <div key={item.id} className="item">
                <div className="item__img">
                  <img src={`${BASE_IMAGE_UTL}${item?.poster_path}`} />
                </div>
                <div className="item__desc">
                  <div>{item?.title}</div>
                  <div>上映日期：{item?.release_date}</div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </div>
  );
}

export default LiveNews;
