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
   display:flex;
   justify-content:center;
   margin-top:20px;
   ul{
    display:flex;
    gap:20px;
    justify-content:center;
    
   }
   ul li{
   list-style-type: none;
   padding:15px;
   background-color:black;
    border-radius:6px;
    
   }
   ul li a{
    color:white;
    text-decoration:none;
   }


  `; 

  return (
    <PaginationContainer>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="page-item"
          >
            <a href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
