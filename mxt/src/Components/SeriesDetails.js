import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import { getDetails } from '../Services/getDetails';

export default function SeriesDetails({ post }) {
  const [numberOfSeasons, setNumberSeasons] = useState(0);
  const { searchType } = useContext(Context);

  useEffect(() => {
    getDetails(searchType, post.id).then((response) => setNumberSeasons(response.number_of_seasons));
  }, [searchType, post.id]);

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