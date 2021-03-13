import React, { useState } from 'react';
import './style.css';

function Pagination({ currentPage, totalPage, changePage }) {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  const handlePageClick = (i) => {
    changePage(i);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleNextBtn = () => {
    changePage((preState) => preState + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit); //5+5
      setMinPageLimit(minPageLimit + pageNumberLimit); //0+5
    }
  };
  const handlePrevBtn = () => {
    changePage((preState) => preState - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
  };

  let pageIncreBtn = null;
  if (totalPage > maxPageLimit) {
    pageIncreBtn = <li> &hellip;</li>;
  }
  let pageDecBtn = null;
  if (totalPage > maxPageLimit) {
    pageDecBtn = <li> &hellip;</li>;
  }

  const list = [];
  for (let i = 1; i <= totalPage; i++) {
    list.push(i);
  }

  return (
    <ul className="pagenumbers">
      <li>
        <button
          onClick={handlePrevBtn}
          disabled={currentPage === list[0] ? true : false}
        >
          {'<'}
        </button>
      </li>
      {pageDecBtn}
      {list.map((number) => {
        if (number < maxPageLimit + 1 && number > minPageLimit) {
          return (
            <li
              className={currentPage === number ? 'active' : null}
              key={number}
              id={number}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      })}
      {pageIncreBtn}
      <li>
        <button
          onClick={handleNextBtn}
          disabled={currentPage === list[list.length - 1]}
        >
          {'>'}
        </button>
      </li>
    </ul>
  );
}

export default React.memo(Pagination);
