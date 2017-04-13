import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';
import CategoryMenu from './components/CategoryMenu';

function App (props) {
    var products = props.state.products.filter(function(prod){
        return prod.category === props.state.currentCategory;
    })
    .map(function(prod){
        return <ProductDetail product={prod} />;
    });
    
    return (
          <div className="App">
            <NavBar />
            <div className="container">
              <div className="row">
                  <CategoryMenu {...props}/>
                  <div className="col-md-9">
                      <Carousel />
                      <div className="row">
                        {products}
                      </div>
                  </div>
              </div>
            </div>
            <Footer />
          </div>
    );
}

export default App;
