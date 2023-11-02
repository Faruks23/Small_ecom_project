// Pagination.js
import React from "react";
import styled from "styled-components";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const PaginationContainer = styled.div`
   background-color:red
   display:flex;
   justify-content:center;
   padding:0 2%;

  ` 

  return (
    <PaginationContainer className="">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
