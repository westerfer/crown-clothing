import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import { withRouter } from 'react-router-dom'

import Button from "../button/button";
import CartItem from "../cartItem/cartItem";
import {selectCartItems} from "../../redux/cart/cartSelectors";

import {toggleCartHidden} from "../../redux/cart/cartActions";

import './cart-dropdown.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem} />
            ))
                : <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>Checkout</Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(
    connect(mapStateToProps)(CartDropdown)
);
