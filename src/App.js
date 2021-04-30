import React, { Component } from 'react';
import Products from './components/Products';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products products={this.props.products} />
      </div>
    );
  }
}

export default App;
