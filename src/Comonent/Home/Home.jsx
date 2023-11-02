import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';

const Home = () => {
  const [loading, setLoading] = useState
    (false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>{setData(data)});
  }, []);
console.log(data);
  return (
    // <section>
    //   <h1>Fake Shop API response:</h1>
    //   {loading && "Loading..."}
    //   {!!data && data.length > 0 ? (
    //     data.map((product) => {
    //       return (
    //         <article key={product.id}>
    //           <img src={product.image} alt="" />
    //           <h2>name: {product.name}</h2>
    //           <p>id: {product.id}</p>
    //           <p>description: {product.description}</p>
    //           <p>brand: {product.brand}</p>
    //           <p>price: {product.price}</p>
    //           <p>category: {product.category}</p>
              
    //         </article>
    //       );
    //     })
    //   ) : (
    //     <p>API did not provided any product, try again.</p>
    //   )}
    // </section>
    <>
     <ProductList></ProductList>
    </>
  );
};

export default Home;