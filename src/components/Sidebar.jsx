import React from 'react';
import Side from './Side';
import './sidebar.css';
import { getMethod, getUrl } from '../services/utils.js';

const Sidebar = () => {

  const method = getMethod();
  const url = getUrl();

  const sideElements = url.map((sideItem, i) => {
    return <li key={sideItem}>
      <Side
        u={sideItem}
        m={method[i]}
      />
    </li>;
  });

  return (
    <ul data-testid="side">
      { sideElements }
    </ul>
  );
};

export default Sidebar;
