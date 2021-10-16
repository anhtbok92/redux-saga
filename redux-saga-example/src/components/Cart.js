import React, { Component } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'

class Cart extends Component {
  render() {
    const { products, total, error, removeFromCart } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ? (
      <em>Please add some products to cart.</em>
    ) : (
        products.map(product => (
          <CartItem
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
            onRemove={() => removeFromCart(product.id)}
          />
        ))
      )

    return (
      <div>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
        <div style={{ color: 'red' }}>{error}</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
  }),
  { removeFromCart },
)(Cart)