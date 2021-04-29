import React, { Component } from 'react'

export class ProductView extends Component {
    render() {
        return (
                <tbody>
                  <td><input type="text" value={this.props.product.name} /></td>
                  <td><input type="text" value={this.props.product.price} /></td>
                  <td><input type="text" value={this.props.product.quantity} /></td>
                  <td><input type="text" value={this.props.product.category} /></td>
                  <td><input type="button" value="X" /></td>
                </tbody>
        )
    }
}

export default ProductView
