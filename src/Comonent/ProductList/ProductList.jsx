
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "../Product/Product";
import Pagination from "../Pagination/Pagination";

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FilterSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);

  const handleSort = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    sortProducts(newSortOrder);
  };

  const sortProducts = (order) => {
    const sortedProducts = [...products];

    if (order === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts); // Update the filteredProducts state
  };

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(
     indexOfFirstProduct,
     indexOfLastProduct
   );

   const paginate = (pageNumber) => {
     setCurrentPage(pageNumber);
   };

  return (
    <div>
      <FilterSortContainer>
        <div>
          <label>Filter by Category: </label>
          {/* Add a category filter input */}
        </div>
        <div>
          <label>Sort by Price: </label>
          <select onChange={handleSort} value={sortOrder}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </FilterSortContainer>
      <ProductListContainer>
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListContainer>

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductList;
