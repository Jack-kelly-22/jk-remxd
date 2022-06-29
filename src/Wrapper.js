import App from './App';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


export default function Wrapper() {
  
  return (
    <div className='bg-black relative' >

      <BrowserRouter>
          <Routes>
            {/* HOME PAGE */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="docs" element={<Docs />} /> */}
            <Route path="/app" element={<App />} />

          </Routes>
      </BrowserRouter>
    </div>


  );
}
