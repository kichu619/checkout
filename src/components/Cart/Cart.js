import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import ProductContainer from './Product/ProductContainer';

const Cart = ({products}) => {
    const cartItems = products && products.map(product => (
        <ProductContainer key={product.id} product={product} />
    ))
    return (
        <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
            >
            {cartItems}
        </ReactCSSTransitionGroup>
    )
}

export default Cart;