import React, { Component } from 'react';
import Products from './components/Products';
import './App.css';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'PS5',
        price: 399.99,
        quantity: 12,
        category: 'Electronics'
      },
      {
        id: 2,
        name: 'Nexus 7',
        price: 199.99,
        quantity: 15,
        category: 'Electronics'
      },
      {
        id: 3,
        name: 'Galaxy J5',
        price: 206.00,
        quantity: 23,
        category: 'Electronics'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
