import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ConfirmationSectionOrderConfirmGradient1 from '../components/order-confirm-gradient/ConfirmationSectionOrderConfirmGradient1';
import ConfirmationSectionFootersGradient2 from '../components/footers-gradient/ConfirmationSectionFootersGradient2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Confirmation() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ConfirmationSectionOrderConfirmGradient1 />
      <ConfirmationSectionFootersGradient2 />
    </React.Fragment>
  );
}

