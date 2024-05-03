import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeadersGradient1 from '../components/headers-gradient/IndexSectionHeadersGradient1';
import IndexSectionFeaturesGradient2 from '../components/features-gradient/IndexSectionFeaturesGradient2';
import IndexSectionItemCardsGradient6 from '../components/item-cards-gradient/IndexSectionItemCardsGradient6';
import IndexSectionCategoryGradient11 from '../components/category-gradient/IndexSectionCategoryGradient11';
import IndexSectionItemCardsGradient8 from '../components/item-cards-gradient/IndexSectionItemCardsGradient8';
import IndexSectionItemCardsGradient13 from '../components/item-cards-gradient/IndexSectionItemCardsGradient13';
import IndexSectionFeaturesGradient12 from '../components/features-gradient/IndexSectionFeaturesGradient12';
import IndexSectionCategoryGradient9 from '../components/category-gradient/IndexSectionCategoryGradient9';
import IndexSectionFootersGradient7 from '../components/footers-gradient/IndexSectionFootersGradient7';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeadersGradient1 />
      <IndexSectionFeaturesGradient2 />
      <IndexSectionItemCardsGradient6 />
      <IndexSectionCategoryGradient11 />
      <IndexSectionItemCardsGradient8 />
      <IndexSectionItemCardsGradient13 />
      <IndexSectionFeaturesGradient12 />
      <IndexSectionCategoryGradient9 />
      <IndexSectionFootersGradient7 />
    </React.Fragment>
  );
}

