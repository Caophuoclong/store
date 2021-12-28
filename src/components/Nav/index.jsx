import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/cart">Giỏ hàng</Link>
        </li>
        <li>
          <Link to="/sales">Khuyến mãi</Link>
        </li>
        <li>
          <Link to="/warranty">Bảo hành</Link>
        </li>
        <li>
          <Link to="/news">Tin tức</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
