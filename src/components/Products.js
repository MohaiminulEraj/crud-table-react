import React, { Component } from 'react';
import ProductView from './ProductView';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
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
  }
  updateSearch(e) {
    this.setState({ search: e.target.value })
  }

  addNewProduct = () => {
    const generateUniqueId = () => '_' + Math.random().toString(36).substr(2, 9);
    let id = generateUniqueId();

    let newProduct = {
      id,
      name: '',
      price: '',
      quantity: '',
      category: ''
    };

    let products = this.state.products;
    products.push(newProduct);

    this.setState({
      products: products
    });
  };


  deleteProduct = (i) => {
    let products = this.state.products;
    let index = this.state.products.findIndex((product) => product.id === i);
    console.log(index)
    products.splice(index, 1);
    this.setState({
      products: products
    })
  }
  editCell = (i) => (e) => {
    let index = this.state.products.findIndex((product) => product.id === i);
    // console.log(i, e.target.value, e.target.name);
    let oldProducts = [...this.state.products]
    oldProducts[index][e.target.name] = e.target.value;
    console.log(oldProducts);
    // let newProducts = this.state.products;
    // console.log(newProducts);
    this.setState({
      products: oldProducts
    })
  }

  render() {
    let filteredProduct = this.state.products.filter((val) => {
      return val.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
    return (
      <div>
        <br />
        <input type="search" placeholder="Search..." value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <table border='1' className="container table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          {filteredProduct.map((product) => (
            <ProductView editCell={this.editCell} deleteProduct={this.deleteProduct} product={product} key={product.id} />
          ))}
        </table>
        <br />
        <input onClick={this.addNewProduct} type="button" value="Add" />
      </div>
    )

  }
}

export default Products;