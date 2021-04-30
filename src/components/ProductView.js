import React, { Component } from 'react'

export class ProductView extends Component {
  render() {
    return (
      <tbody>
        <td><input name='name' onChange={this.props.editCell(this.props.product.id)} type="text" value={this.props.product.name} placeholder="Enter Product Name" /></td>
        <td><input name='price' onChange={this.props.editCell(this.props.product.id)} type="text" value={this.props.product.price} placeholder="Enter Price" /></td>
        <td><input name='quantity' onChange={this.props.editCell(this.props.product.id)} type="text" value={this.props.product.quantity} placeholder="Enter Quantity" /></td>
        <td><input name='category' onChange={this.props.editCell(this.props.product.id)} type="text" value={this.props.product.category} placeholder="Enter Category" /></td>
        <td><input type="button" onClick={e => this.props.deleteProduct(this.props.product.id)} value="X" /></td>
      </tbody>
    )
  }
}

export default ProductView
