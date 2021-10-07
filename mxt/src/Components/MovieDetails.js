import React from 'react';
import PropTypes from 'prop-types';

export default function MovieDetails({ post }) {
  return (
      <div>
        <p>Título: {post.original_title}</p>
        <p>Data de lançamento: {post.release_date}</p>
        <p>Avaliação: {post.vote_average}</p>
      </div>
  );
}

MovieDetails.propTypes = {
  post: PropTypes.object.isRequired,
};