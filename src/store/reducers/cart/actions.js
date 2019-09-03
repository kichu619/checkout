import { get } from 'axios'

export const CART_FETCH = 'CART_FETCH'

export const cartFetch = dispatch => {
  return async dispatch => {
    const { data } = await get('https://my-json-server.typicode.com/ruhaise/mock/cart')
    const { cartItems } = data
    dispatch({
      type: CART_FETCH,
      payload: {
        cartItems: cartItems
      }
    })
  }
}