import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../src/components/Widget/components/Conversation/components/Sender/stripe';

const stripePromise = loadStripe('pk_test_VbgWFicE7nr52ls60zXadLgt00GH9ByqrW');

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById('root'),
);
