import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return <h3>Oops, route not found.</h3>;
};

export default {
  component: NotFoundPage
};
