import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './Name';
import Description from './Description';
import Image from './Image';
import Product from 'Product.js';
import Price from './Price';


function App() {
  return (
    <div className="App">
       <h1>Product Details</h1>
      <Name name={Product.name} />
      <Price price={Product.price} />
      <Description description={Product.description} />
       <Image image={Product.image} /> 
    </div>
  );
}

export default App;
