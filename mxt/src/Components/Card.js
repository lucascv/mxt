import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ post }) {
  return (
    <div>
        <img
          src={post.poster_path}
          alt="Foto"
        />
        <h3>{post.title || post.name}</h3>
        <p>{post.overview || post.id}</p>
    </div>

  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};