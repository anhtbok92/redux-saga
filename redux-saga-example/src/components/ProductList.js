import React, { Component } from 'react'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'

class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props

    return (
      <div>
        <h3>Products</h3>
        {products.map(product => (
          <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id)} />
        ))}
      </div>
    )
  }
}

export default connect(state => ({ products: getVisibleProducts(state.products) }), { addToCart })(ProductList)
