import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState('');

  const fullData = {
    data,
    setData,
    searchType,
    setSearchType,
  };

  return (
    <Context.Provider value={fullData}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};