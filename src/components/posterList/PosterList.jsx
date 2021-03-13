import React, { useEffect, useState } from 'react';
import Poster from '../poster/Poster';
import Pagination from '../pagination/Pagination';
import axios from '../../API/axios';
import requests from '../../constant/api';
import './style.css';

function PosterList() {
  const [movie, setMovie] = useState([]);
  const [totalPage, setTotalPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${requests.fetchTrending}&page=${currentPage}`)
        .then((res) => {
          setMovie(res.data.results);
          setTotalPage(res.data.total_pages);
        });
    };
    fetchData();
  }, [currentPage]);

  return (
    <>
      {movie.length && (
        <div className="posterlist">
          {movie.map((item) => {
            return <Poster key={item.id} data={item} />;
          })}
          <Pagination
            currentPage={currentPage}
            totalPage={totalPage}
            changePage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}

export default PosterList;
