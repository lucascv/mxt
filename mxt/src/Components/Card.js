import React from 'react';
import PropTypes from 'prop-types';

const setImage = (post) => {
  if (post.poster_path) return `https://image.tmdb.org/t/p/w500/${post.poster_path}`;
  if (post.profile_path) return `https://image.tmdb.org/t/p/w500/${post.profile_path}`;
  return 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
}

export default function Card({ post }) {
  return (
    <div className="overview">
        <img
          src={setImage(post)}
          alt={`Imagem do(a) ${post.name}`}
        />
        <h2>{post.title || post.name}</h2>
        <p>{post.overview}</p>
    </div>

  );
}

Card.propTypes = {
  post: PropTypes.object.isRequired,
};