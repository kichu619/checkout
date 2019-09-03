import { CART_FETCH } from './actions'
import {
  CART_PRODUCT_REMOVE,
  CART_PRODUCT_QUANTITY_UPDATE
} from './product/actions'

function CartReducer(state = {}, action) {
  switch (action.type) {
    
    case CART_FETCH:

      return { ...state, ...action.payload }

    case CART_PRODUCT_REMOVE:
      const { cartItemId } = action.payload
      const leftOverCartItems = state.cartItems.filter(
        cartItem => cartItem.id !== cartItemId
      )

      return { ...state, cartItems: leftOverCartItems }

    case CART_PRODUCT_QUANTITY_UPDATE:
      const { quant, id } = action.payload
      const updatedCartItems = [...state.cartItems] // took a copy
      updatedCartItems.filter(item => item.id === id)[0].quantitySelected = quant // mutated the copy
      
      return { ...state, cartItems: updatedCartItems } // updated the state with copy

    default:
      return state
  }
}

export default CartReducer
