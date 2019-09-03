import React from 'react'

import QuantSelector from './QuantSelector'
const Product = (props)=> {
  const { name, price = 0, description, id, cover, quantitySelected } = props.product
  return (
    <div className='product'>
      <div className='product__card'>
        {cover ? (
          <img className='product__cover' src={cover} alt='testimage' />
        ) : null}
        <div className='product__description'>
          <h3 className='product__description__name'>{name}</h3>
          <p className='product__description__text'>{description} </p>
          <button
            className='product__remove'
            onClick={() => props.cartProductRemove({ cartItemId: id })}
          >
            remove
          </button>
        </div>
      </div>
      <QuantSelector  onChange={props.onQuantChange} initialValue={quantitySelected}  min={1}/>
      <p className='product__description__price'>${price}</p>
      <p className='product__description__price'>${price*quantitySelected || 0}</p>
    </div>
  )
}

export default Product
