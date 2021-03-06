import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/Context';
import Card from './Card';
import MovieDetails from './MovieDetails';
import PersonDetails from './PersonDetails';
import SeriesDetails from './SeriesDetails';

export default function MoviePoster({ post }) {
  const [showMore, setShowMore] = useState(false);
  const { searchType } = useContext(Context);

  if (!showMore) return (
    <div className="card" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <div className="plus">+</div>
    </div>
  );

  if (searchType === "movie") return (
    <div className="card" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <div className="plus">-</div>
      <MovieDetails post={post}></MovieDetails>
    </div>
  );

  if (searchType === "person") return (
    <div className="card" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <div className="plus">-</div>
      <PersonDetails post={post}></PersonDetails>
    </div>
  );

  if (searchType === "tv") return (
    <div className="card" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <div className="plus">-</div>
      <SeriesDetails post={post}></SeriesDetails>
    </div>
  );
}

MoviePoster.propTypes = {
  post: PropTypes.object.isRequired,
};