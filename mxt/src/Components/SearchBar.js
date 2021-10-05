import React from 'react';

export default function SearchBar() {
    const placeHolder = "Digite o termo de busca";
    return (
        <div>
            <input type="text" name="search-bar" maxLength="10" placeholder={placeHolder}></input>
            <button>Buscar</button>
        </div>
    );
}