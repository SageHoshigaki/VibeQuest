import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FindeventSectionHeadersGradient1 from '../components/headers-gradient/FindeventSectionHeadersGradient1';
import FindeventSectionCategoryGradient12 from '../components/category-gradient/FindeventSectionCategoryGradient12';
import FindeventSectionItemCardsGradient3 from '../components/item-cards-gradient/FindeventSectionItemCardsGradient3';
import FindeventSectionCategoryGradient6 from '../components/category-gradient/FindeventSectionCategoryGradient6';
import FindeventSectionCallToActionGradient9 from '../components/call-to-action-gradient/FindeventSectionCallToActionGradient9';
import FindeventSectionItemCardsGradient11 from '../components/item-cards-gradient/FindeventSectionItemCardsGradient11';
import FindeventSectionCategoryGradient7 from '../components/category-gradient/FindeventSectionCategoryGradient7';
import FindeventSectionItemCardsGradient10 from '../components/item-cards-gradient/FindeventSectionItemCardsGradient10';
import FindeventSectionCategoryGradient13 from '../components/category-gradient/FindeventSectionCategoryGradient13';
import FindeventSectionFootersGradient5 from '../components/footers-gradient/FindeventSectionFootersGradient5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Findevent() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FindeventSectionHeadersGradient1 />
      <FindeventSectionCategoryGradient12 />
      <FindeventSectionItemCardsGradient3 />
      <FindeventSectionCategoryGradient6 />
      <FindeventSectionCallToActionGradient9 />
      <FindeventSectionItemCardsGradient11 />
      <FindeventSectionCategoryGradient7 />
      <FindeventSectionItemCardsGradient10 />
      <FindeventSectionCategoryGradient13 />
      <FindeventSectionFootersGradient5 />
    </React.Fragment>
  );
}

