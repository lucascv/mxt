import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import { getDetails } from '../Services/getDetails';
import { compararDatas } from '../Services/compararDatas';
import { calcularIdade } from '../Services/calcularIdade';

export default function PersonDetails({ post }) {
  const [birthday, setBirthday] = useState('');
  const [latestMovie, setLatestMovie] = useState('');
  const { searchType } = useContext(Context);

  useEffect(() => {
    setLatestMovie(compararDatas(post.known_for));
    getDetails(searchType, post.id).then((response) => setBirthday(response.birthday));
  }, []);

  return (
      <div>
        <p>Nome: {post.name}</p>
        <p>Idade: {calcularIdade(birthday)}</p>
        <p>Último filme: {latestMovie}</p>
      </div>
  );
}

PersonDetails.propTypes = {
  post: PropTypes.object.isRequired,
};