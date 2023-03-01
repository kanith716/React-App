import logo from './logo.svg';
import './App.css';
import MyComponents from './components/Welcome'
import { Component } from 'react';
import Style from './components/levalTwoComponents/Style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Router-components/Home';
import About from './Router-components/About';
import Product from './Router-components/Product';
import Menu from './Menu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      I am Main Page
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Product" element={<Product />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
