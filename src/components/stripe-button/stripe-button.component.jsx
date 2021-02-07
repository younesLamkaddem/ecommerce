import React from 'react';
import './stripe-button.style.scss';
import StripeCheckout from 'react-stripe-checkout'

const  StripeButton = ({price}) => {

   // const publishableKey = 'pk_test_51IICV1LsSxpSO5VBdU1pXusaWiYi4dICMtlxWF5rf9ufWnqqmQPLY1o2llKtxDCFKLG05KxGmVenwW91NfTDTAL8001FvIGKUL';
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51IICV1LsSxpSO5VBdU1pXusaWiYi4dICMtlxWF5rf9ufWnqqmQPLY1o2llKtxDCFKLG05KxGmVenwW91NfTDTAL8001FvIGKUL';
   const onToken = token => {
     console.log(token);
     alert('Payment Succesful!');
   };
 
   return (
     <StripeCheckout
       label='Pay Now'
       name='My Payement'
       billingAddress
       shippingAddress
       image='https://svgshare.com/i/CUz.svg'
       description={`Your total is $${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey} />
       
    
   );
    

}

export default StripeButton