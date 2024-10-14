import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p1 className="title">Delivery Information</p1>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name'></input>
          <input type="text" placeholder='Last Name'></input>
        </div>
        <input type="email" placeholder='email-address'/>
        <input type="text" placeholder='street'/>
        <div className='multi-fields'>
          <input type="text" placeholder='city'></input>
          <input type="text" placeholder='state'></input>
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='pincode'></input>
          <input type="text" placeholder='country'></input>
        </div>
        <input type="text" placeholder='phone' />

      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() ===0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>proceed to payment</button>
        </div>


      </div>

    </form>
    
  )
}

export default PlaceOrder