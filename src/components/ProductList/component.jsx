import React from 'react';

import ProductCard from '../ProductCard';

import { useProductList } from './hook';

const ProductList = () => {
  const pl = useProductList();

  return (
    <p>
      ProductList
      {pl}

      <div>
        <ProductCard />
      </div>
    </p>
  );
};

export default ProductList;
