import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductSectionHeadersGradient3 from '../components/headers-gradient/ProductSectionHeadersGradient3';
import ProductSectionProductDetailsGradient1 from '../components/product-details-gradient/ProductSectionProductDetailsGradient1';
import ProductSectionFootersGradient2 from '../components/footers-gradient/ProductSectionFootersGradient2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Product() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ProductSectionHeadersGradient3 />
      <ProductSectionProductDetailsGradient1 />
      <ProductSectionFootersGradient2 />
    </React.Fragment>
  );
}

