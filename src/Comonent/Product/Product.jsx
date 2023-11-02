import React from 'react';
import styled from 'styled-components';


const ProductItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
  img {
    width: 100%;
    height: 100%;
    max-height: 300px;
  }
`;

const AddButton = styled.div`
display: flex;
 justify-content:center;

 button{
  background:lightgreen;
  border:none;
  padding:5px 8px;
  border-radius:6px;
  cursor:pointer;
  
 }

`

const Product = ({product}) => {
  return (
    <ProductItem className='g1'>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.description.slice(0, 50)}...Read More</p>
      <p>${product.price}</p>
      <AddButton>
        <button>Add to cart</button>
      </AddButton>

    </ProductItem>
  );
};

export default Product;