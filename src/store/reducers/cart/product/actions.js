
export const CART_PRODUCT_REMOVE = 'CART_PRODUCT_REMOVE'
export const CART_PRODUCT_QUANTITY_UPDATE = 'CART_PRODUCT_QUANTITY_UPDATE'
export const cartProductRemove = ({ cartItemId }) => {
  return {
    type: CART_PRODUCT_REMOVE,
    payload: {
      cartItemId
    }
  }
}

export const cartProductQuantityUpdate = ({ quant, id }) => {
  return {
    type: CART_PRODUCT_QUANTITY_UPDATE,
    payload: {
      quant,id
    }
  }
}

//TODO: make these async too, post the data then i should update the state, 
//TODO: create a proper mock that can handle this too