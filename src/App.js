import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import CartPage from './pages/Cart.js';
import FindeventPage from './pages/Findevent.js';
import ProductPage from './pages/Product.js';
import ConfirmationPage from './pages/Confirmation.js';
import CreateeventPage from './pages/Createevent.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/cart" element={<CartPage />} />
         
      <Route path="/findevent" element={<FindeventPage />} />
         
      <Route path="/product" element={<ProductPage />} />
         
      <Route path="/confirmation" element={<ConfirmationPage />} />
         
      <Route path="/createevent" element={<CreateeventPage />} />
    </Routes>
  );
}

export default App;
