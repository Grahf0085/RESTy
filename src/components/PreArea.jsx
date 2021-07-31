import React from 'react';
import './preArea.css';

const preArea = ({ body }) => {
  return <pre>{JSON.stringify(body, null, 2)}</pre>;
};

export default preArea;
