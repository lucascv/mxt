import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDetails } from '../Services/getDetails';

export default function SeriesDetails({ post }) {
  const [numberOfSeasons, setNumberSeasons] = useState(0);

  useEffect(() => {
    getDetails(post.id).then((response) => setNumberSeasons(response.number_of_seasons));
  }, []);

  return (
      <div>
        <p>Título: {post.original_name}</p>
        <p>Data de lançamento: {post.first_air_date}</p>
        <p>Nº de temporadas: {numberOfSeasons}</p>
        <p>Avaliação: {post.vote_average}</p>
      </div>
  );
}

SeriesDetails.propTypes = {
  post: PropTypes.object.isRequired,
};