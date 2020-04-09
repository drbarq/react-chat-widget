import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../src/components/Widget/components/Conversation/components/Sender/stripe';

const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <CheckoutForm />
    {/* <App /> */}
  </Elements>,
  document.getElementById('root'),
);
