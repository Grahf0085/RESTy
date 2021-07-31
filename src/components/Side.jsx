import React from 'react';
import PropTypes from 'prop-types';
import './side.css';

const Side = ({ u, m }) => (
  <section>
    <h3>{m}</h3>
    <p>{u}</p>
  </section>
);

Side.propTypes = {
  u: PropTypes.string.isRequired,
  m: PropTypes.string.isRequired
};

export default Side;

