import React, { useEffect, useState } from 'react';
import { Product } from '../types/types';
import { fetchProducts } from '../utils/fakeApi';
import ProductItem from './ProductItem';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products. Please try again.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
