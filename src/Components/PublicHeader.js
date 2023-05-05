import React from 'react';
import { Link } from 'react-router-dom';

function PublicHeader() {
  return (
    <div className="header">
      <h1>Public Header</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default PublicHeader;
