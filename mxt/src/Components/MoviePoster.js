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
    <div className="poster" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <div>+</div>
    </div>
  );

  if (searchType === "movie") return (
    <div className="poster" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <MovieDetails post={post}></MovieDetails>
    </div>
  );

  if (searchType === "person") return (
    <div className="poster" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <PersonDetails post={post}></PersonDetails>
    </div>
  );

  if (searchType === "tv") return (
    <div className="poster" onClick={() => setShowMore((current) => !current)}>
      <Card post={post}></Card>
      <SeriesDetails post={post}></SeriesDetails>
    </div>
  );
}

MoviePoster.propTypes = {
  post: PropTypes.object.isRequired,
};