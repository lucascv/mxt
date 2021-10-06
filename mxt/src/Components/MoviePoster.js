import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function MoviePoster({ post }) {
  const [showMore, setShowMore] = useState(false);

  if (!showMore) return (
    <div className="poster" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
    </div>
  );

  return (
    <div className="poster" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <div>
        <p>Título: {post.original_title}</p>
        <p>Data de lançamento: {post.release_date}</p>
        <p>Avaliação: {post.vote_average}</p>
      </div>
    </div>

  );
}

MoviePoster.propTypes = {
  post: PropTypes.object.isRequired,
};