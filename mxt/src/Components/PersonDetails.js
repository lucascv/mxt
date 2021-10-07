import React from 'react';
import PropTypes from 'prop-types';

export default function PersonDetails({ post }) {
  return (
      <div>
        <p>Nome: {post.name}</p>
        <p>Idade: </p>
        <p>Último filme: </p>
      </div>
  );
}

PersonDetails.propTypes = {
  post: PropTypes.object.isRequired,
};