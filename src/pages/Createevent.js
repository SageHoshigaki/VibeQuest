import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import CreateeventSectionHeadersGradient1 from '../components/headers-gradient/CreateeventSectionHeadersGradient1';
import CreateeventSectionCallToActionGradient7 from '../components/call-to-action-gradient/CreateeventSectionCallToActionGradient7';
import CreateeventSectionCallToActionGradient3 from '../components/call-to-action-gradient/CreateeventSectionCallToActionGradient3';
import CreateeventSectionFeaturesGradient5 from '../components/features-gradient/CreateeventSectionFeaturesGradient5';
import CreateeventSectionCallToActionGradient2 from '../components/call-to-action-gradient/CreateeventSectionCallToActionGradient2';
import CreateeventSectionCategoryGradient4 from '../components/category-gradient/CreateeventSectionCategoryGradient4';
import CreateeventSectionFootersGradient6 from '../components/footers-gradient/CreateeventSectionFootersGradient6';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Createevent() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <CreateeventSectionHeadersGradient1 />
      <CreateeventSectionCallToActionGradient7 />
      <CreateeventSectionCallToActionGradient3 />
      <CreateeventSectionFeaturesGradient5 />
      <CreateeventSectionCallToActionGradient2 />
      <CreateeventSectionCategoryGradient4 />
      <CreateeventSectionFootersGradient6 />
    </React.Fragment>
  );
}

