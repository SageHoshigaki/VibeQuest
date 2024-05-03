import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CartSectionStepsGradient3 from '../components/steps-gradient/CartSectionStepsGradient3';
import CartSectionCheckoutGradient1 from '../components/checkout-gradient/CartSectionCheckoutGradient1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Cart() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <CartSectionStepsGradient3 />
      <CartSectionCheckoutGradient1 />
    </React.Fragment>
  );
}

