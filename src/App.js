import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CustomSidebar from './CustomSidebar';
import Documentation from './Documentation';
import Calendar from './Calendar';
import Ecommerce from './Ecommerce';
import NotFound from './NotFound'; // Assuming a NotFound component for unmatched routes

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <BrowserRouter>
        <CustomSidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/e-commerce" element={<Ecommerce />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
