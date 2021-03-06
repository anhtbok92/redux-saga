import React, { Component } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props
    const addToCartAction = (
      <button onClick={this.props.onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    )

    return (
      <div style={{ marginBottom: 20 }}>
        <Product title={product.title} price={product.price} action={addToCartAction} />
      </div>
    )
  }
}
