import React from 'react';
import { fetchSearch } from '../Services/fetch';

export default function SearchBar() {
    const placeHolder = "Digite o termo de busca";
    return (
        <div>
            <input type="text" name="search-bar" maxLength="10" placeholder={placeHolder}></input>
            <button onClick={console.log(fetchSearch())}>Buscar</button>
        </div>
    );
}