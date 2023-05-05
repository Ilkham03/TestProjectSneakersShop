import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import PublicHeader from './Components/PublicHeader';
import Products from './pages/Products';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
      </div>
    </Router>

  );
}

export default App;
