import React, { Component } from 'react'
import { connect } from 'react-redux'

import Cart from './Cart';

import { cartFetch } from '../../store/reducers/cart/actions'

class CartContainer extends Component {
    
    componentDidMount() {
        this.props.cartFetch()
    }

    render() {
        const { cartItems } = this.props
        const itemCount = cartItems && cartItems.length
    
        return (
            <div className='cart'>
                <div className='cart__heading'>
                    <h2>Shopping Cart</h2>
                    <h2>{itemCount} Items</h2>
                </div>
                <div className='cart__subheading'>
                    <h4 className="cart__subheading--products">PRODUCTS</h4>
                    <h4 className="cart__subheading--quantity">QUANTITY</h4>
                    <h4 className="cart__subheading--price">PRICE</h4>
                    <h4 className="cart__subheading--total">TOTAL</h4>
                </div>
                <Cart products={cartItems}/>
                <a href='/'>Restart</a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = {
    cartFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
