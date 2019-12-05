import React from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import Img from 'gatsby-image';

export default function Product({ product }) {
  const { name, city, state, zipcode } = product;
  const { fixed } = product.photos[0];
  const { list } = product.category[0].category;

  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">
            {name} - {list}
          </h3>
          <h3 className="price">
            {city}, {state} {zipcode}
          </h3>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  @media (min-width: 350px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
`;
