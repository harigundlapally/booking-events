import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from '../src/components/Header';
import Dashboard from '../src/components/Dashboard';
import EventListing from '../src/components/EventListing';
import Help from '../src/components/Help';
import EventBooking from './components/EventBooking';
import PaymentSuccess from './components/PaymentSuccess';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './App.css';

const App = () => {
  return (
    <section className="app">
      <Provider store={store}>
        <BrowserRouter>
            <Header />
            <section className="page-wrapper">
              <Route path='/' exact component={Dashboard} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/events' component={EventListing} />
              <Route path='/help' component={Help} />
              <Route path='/logout' component={Dashboard} />
              <Route path='/event-booking/:eventId' component={EventBooking} />
              <Route path='/payment-success/:eventId' component={PaymentSuccess} />
            </section>
        </BrowserRouter>
      </Provider>
    </section>
  );
}

export default App;
