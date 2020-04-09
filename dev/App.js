import React, {Component} from 'react';
import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
} from '../index';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

let stripePromise = '';

export default class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');

    // stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');
  }

  handleNewUserMessage = newMessage => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === 'fruits') {
        setQuickButtons([
          {label: 'Apple', value: 'apple'},
          {label: 'Orange', value: 'orange'},
          {label: 'Pear', value: 'pear'},
          {label: 'Banana', value: 'banana'},
        ]);
      } else {
        addResponseMessage(newMessage);
      }
    }, 2000);
  };

  handleQuickButtonClicked = e => {
    addResponseMessage('Selected ' + e);
    setQuickButtons([]);
  };

  render() {
    return (
      <h1> hello</h1>
      // <Widget
      //   title="Bienvenido"
      //   subtitle="Asistente virtual"
      //   senderPlaceHolder="Escribe aquí ..."
      //   handleNewUserMessage={this.handleNewUserMessage}
      //   handleQuickButtonClicked={this.handleQuickButtonClicked}
      //   badge={1}
      // />
    );
  }
}
