import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [searchType, setSearchType] = useState('');
  const [semImagem] = useState('https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg');

  const fullData = {
    data,
    setData,
    searchType,
    setSearchType,
    semImagem,
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