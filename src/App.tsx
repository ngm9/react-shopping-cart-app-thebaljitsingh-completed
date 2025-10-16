import React from 'react';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fafafa' }}>
      <main style={{ flex: 1, padding: '40px' }}>
        <h1>Acme Shop – Products</h1>
        <ProductList />
      </main>
      <aside style={{ width: 320, background: '#fff', boxShadow: '0 0 6px #ddd', borderLeft: '1px solid #eee' }}>
        <CartSidebar />
      </aside>
    </div>
  );
};

export default App;
