import React, { useContext } from 'react';
import Context from '../Context/Context';
import MoviePoster from './MoviePoster';
import { handleSearchType } from '../Services/handleSearchType';

export default function SearchList() {
  const { data, searchType } = useContext(Context);

  if (!data.length) return <div>{`Não encontramos ${handleSearchType(searchType)} com os termos informados`}</div>;

  return (
    <div className="inside-container">
      {data.map((post, i) => <MoviePoster key={i} post={post} />)}
    </div>
  );
}