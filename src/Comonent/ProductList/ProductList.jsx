import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../Product/ProductCard";
import Pagination from "../Pagination/Pagination";


const MainContainer = styled.div`
 display:flex;
 justify-content: center;
 width: 100%;

`
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
  const [filteredProducts, setFilteredProducts] = useState([]); // Create state for filtered products
  const [uniqueCategories, setUniqueCategories] = useState([]); // Create state for unique categories

  // product data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filteredProducts with all products
         const categories = [...new Set(data.map((product) => product.category))];
        setUniqueCategories(categories);
      
      });
  }, []);


  // product short
  const handleSort = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    sortProducts(newSortOrder);
  };

  const sortProducts = (order) => {
    const sortedProducts = [...filteredProducts];

    if (order === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts); // Update the filteredProducts state
  };

  // pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filter products by category
  const handleSortByCategory = (e) => {
    const category = e.target.value;

    if (category === "all") {
      setFilteredProducts(products); // Show all products when "All" is selected
    } else {
      const filteredProducts = products.filter((p) => p.category === category);
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div>
      <FilterSortContainer>
        <div>
          <label>Filter by Category: </label>
          <select onChange={handleSortByCategory}>
            <option value="all">All</option>
            {uniqueCategories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
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
      <MainContainer>
        <ProductListContainer>
          {currentProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductListContainer>
      </MainContainer>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductList;
