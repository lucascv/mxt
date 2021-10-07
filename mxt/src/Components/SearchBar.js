import React, { useContext, useState } from 'react';
import { fetchSearch } from '../Services/fetch';
import Context from '../Context/Context';
import { getValue } from '../Services/getRadioBtnValue';

const onClickHandler = (query, setSearchType, setData) => {
    setData([]);
    const radioValue = getValue();
    setSearchType(radioValue);
    fetchSearch(radioValue, query).then((response) => setData(response.results));
}

export default function SearchBar() {
    const { setData, setSearchType } = useContext(Context);
    const [query, setQuery] = useState('');
    const placeHolder = "Digite o termo de busca";
    return (
        <div className="margin15">
            <input
                type="text"
                name="search-bar"
                placeholder={placeHolder}
                onChange={(e) => setQuery(e.target.value)}
            >
            </input>
            <button onClick={() => onClickHandler(query, setSearchType, setData)}>
                Buscar
            </button>
        </div>
    );
}