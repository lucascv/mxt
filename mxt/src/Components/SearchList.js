import React, { useContext } from 'react';
import Context from '../Context/Context';
import MoviePoster from './MoviePoster';

export default function SearchList() {
  const { data, searchType } = useContext(Context);

  if (!data.length && searchType == 'person') return <div>Não encontramos nenhum artista com os termos informados</div>;
  if (!data.length && searchType == 'tv') return <div>Não encontramos nenhuma série com os termos informados</div>;
  if (!data.length && searchType == 'movie') return <div>Não encontramos nenhum filme com os termos informados</div>;
  if (!data.length) return <div>Não encontramos nada com os termos informados</div>;
  return (
    <div>
      {data.map((post, i) => <MoviePoster key={i} post={post} />)}
    </div>
  );
}