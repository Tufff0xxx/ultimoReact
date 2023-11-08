import React from 'react';
import { ProductsCards } from '../products_cards/products_cards';
import { producst } from '../../categorias/data/products';
import { ProductsContainer, ProductsWrapper } from './styles';

export const ProductsWidget = () => {
  return (
    <ProductsWrapper>
      <h2>PRODUCTOS</h2>
      <ProductsContainer>
        {producst.map((product) => (
          <ProductsCards
            key={product.id}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </ProductsContainer>
      <div>
        <button>Ver mas</button>
        <button>Ver menos</button>
      </div>
    </ProductsWrapper>
  );
};
