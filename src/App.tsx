import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './component/home/home';
import About from './component/about/about';
import Contact from './component/contact/contact';


const App: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Outlet></Outlet>
    </>
  );
};

export default App;
