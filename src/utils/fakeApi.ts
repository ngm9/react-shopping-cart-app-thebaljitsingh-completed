import { Product } from '../types/types';

export function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 'p1', name: 'Wireless Mouse', description: 'Silent, ergonomic mouse', price: 19.99 },
        { id: 'p2', name: 'USB Keyboard', description: 'Mechanical, RGB backlit', price: 39.5 },
        { id: 'p3', name: '27" Monitor', description: 'Full HD with HDMI', price: 159 },
        { id: 'p4', name: 'Laptop Stand', description: 'Aluminum, adjustable height', price: 22.95 },
        { id: 'p5', name: 'Noise Cancelling Headphones', description: 'Bluetooth, over-ear', price: 98.75 }
      ]);
    }, 1100);
  });
}
