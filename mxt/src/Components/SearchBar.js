import React, { useContext, useState } from 'react';
import { fetchSearch } from '../Services/fetch';
import Context from '../Context/Context';
import { getValue } from '../Services/getRadioBtnValue';

const onClickHandler = (searchType, query, setSearchType, setData) => {
    console.log(getValue());
    setData([]);
    setSearchType(getValue());
    fetchSearch(searchType, query).then((response) => console.log(response.results) || setData(response.results));
}

export default function SearchBar() {
    const { setData, searchType, setSearchType } = useContext(Context);
    const [query, setQuery] = useState('');
    const placeHolder = "Digite o termo de busca";
    return (
        <div>
            <input type="text" name="search-bar" placeholder={placeHolder} onChange={(e) => setQuery(e.target.value)}></input>
            <button onClick={() => onClickHandler(searchType, query, setSearchType, setData)}>
                Buscar
            </button>
        </div>
    );
}