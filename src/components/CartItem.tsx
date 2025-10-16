import React from 'react';
import { CartItem as CartItemType } from '../types/types';

interface CartItemProps {
  item: CartItemType;
  // Add handlers for quantity change and remove here
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '6px 0' }}>
      <div>
        <strong>{item.product.name}</strong>
        <div style={{ fontSize: 12, color: '#999' }}>
          ${item.product.price.toFixed(2)} × {item.quantity}
        </div>
      </div>
      <div>
        <button>−</button>
        <span style={{ margin: '0 6px' }}>{item.quantity}</span>
        <button>+</button>
        <button style={{ marginLeft: 12, color: 'crimson' }}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
