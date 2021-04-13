import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotal} from "../../redux/cart/cartSelectors";

import CheckoutItem from "../../components/checkoutItem/checkoutItem";
import StripeCheckoutButton from "../../components/stribeButton/stripeButton";

import './checkout.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }
        <div className="total">
            <span>Total: ${total}</span>
        </div>

        <div className="test-warning">
            *Use the following test credit card for payments*<br/>
            CC #: 4242 4242 4242 4242<br/>
            Expiration Date: 01/25<br/>
            CCV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage)
