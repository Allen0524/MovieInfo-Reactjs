import React, { useState, useEffect } from 'react';
import axios from '../API/axios';

function useFetchData(url, type) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === 'liveNews') {
      axios.get(url).then((res) => {
        setData(res.data.results.slice(0, 10));
      });
    } else if (type === 'tvRank') {
      axios.get(url).then((res) => {
        setData(res.data.results.slice(0, 5));
      });
    }
  }, [url]);

  return { data };
}

export default useFetchData;
