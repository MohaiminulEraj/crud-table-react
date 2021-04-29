import React, { Component } from 'react';
import ProductView from './ProductView';
// import { useState } from 'react'

class Products extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
  updateSearch(e) {
    this.setState({ search: e.target.value })
  }
  render() {
    // const [searchTerm, setSearchTerm] = useState('')
    return (
      <div>
        <input type="search" name="" placeholder="Search..." value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <table border='1' class="container table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          {this.props.products.filter((val) => {
            return val.name.indexOf(this.state.search) !== 1;
            {/* if (searchTerm == "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            } */}
          }).map((product) => (
            <ProductView product={product} key={product.id} />
          ))}
        </table>
        <input type="button" value="Add" />
      </div>
    )

  }
}

export default Products;