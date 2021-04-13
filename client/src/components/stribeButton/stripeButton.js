import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I6gikF8UizeRnAkUP3Xd7kIodq4dIVpuV7wKpRNcFrvpwJrxS3x3J4HzL50myX0AF2a9n2AxAhQKwT5hRy7fmFW00LGrcmMLn'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert (
                'There was an issue with your payment. '
            );
        });
    }

    return (
        <StripeCheckout
            label="Pay Now" // text inside the Stripe button
            name="Crown Clothing" // the pop-in header title
            shippingAddress
            billingAddress
            image="https://svgshare.com/i/CUz.svg" // the pop-in header image (default none)
            description={`Your total is $${price}`} // the pop-in header subtitle
            amount={priceForStripe} // cents
            panelLabel="Pay Now" // prepended to the amount in the bottom pay button
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
