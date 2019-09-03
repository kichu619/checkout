import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './Product'

import { cartProductRemove, cartProductQuantityUpdate } from '../../../store/reducers/cart/product/actions'

class ProductContainer extends Component {
  
  handleQuantChange = quantity => this.props.cartProductQuantityUpdateHandler({quant:quantity, id: this.props.product.id})
  
  render() {
    const { cartProductRemovedHandler } = this.props
    const { product } = this.props;
    return (
      <Product
        product={product}
        cartProductRemove={cartProductRemovedHandler}
        onQuantChange={this.handleQuantChange}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    cartProductRemovedHandler: ({ cartItemId }) => {
      dispatch(cartProductRemove({ cartItemId }))
    },
    cartProductQuantityUpdateHandler:({ quant,id }) => {
      dispatch(cartProductQuantityUpdate({ quant,id }))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer)
