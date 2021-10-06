import React, { useContext, useState } from 'react';
import { fetchSearch } from '../Services/fetch';
import Context from '../Context/Context';

export default function SearchBar() {
    const { setData, searchType } = useContext(Context);
    const [query, setQuery] = useState('');
    const placeHolder = "Digite o termo de busca";
    return (
        <div>
            <input type="text" name="search-bar" placeholder={placeHolder} onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick={() => fetchSearch(searchType, query).then((response) => console.log(response.results))}>
                Buscar
            </button>
        </div>
    );
}