import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const { price, quantity, title, action } = this.props
    return (
      <div>
        {title} - &#36;{price} {quantity ? `x ${quantity}` : null} {action}
      </div>
    )
  }
}
