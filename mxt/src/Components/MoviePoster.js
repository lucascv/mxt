import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function MoviePoster({ post }) {
  const [showMore, setShowMore] = useState(false);

  if (!showMore) return (
    <div onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
    </div>
  );

  return (
    <div onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <p>teste</p>
    </div>

  );
}

MoviePoster.propTypes = {
  post: PropTypes.object.isRequired,
};