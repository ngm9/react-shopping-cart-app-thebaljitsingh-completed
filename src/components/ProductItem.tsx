import React from 'react';
import { Product } from '../types/types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  // Add handler here to add to cart
  return (
    <div style={{
      border: '1px solid #d3d3d3',
      borderRadius: 6,
      padding: 20,
      minWidth: 180,
      width: 220,
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    }}>
      <div>
        <h3>{product.name}</h3>
        <div style={{ color: '#888', margin: '4px 0 8px 0' }}>{product.description}</div>
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>${product.price.toFixed(2)}</div>
      </div>
      <button style={{ marginTop: 10 }}>
        + Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
