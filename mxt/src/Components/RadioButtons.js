import React, { useContext } from 'react';
import Context from '../Context/Context';

export default function RadioButtons() {
    const { setSearchType } = useContext(Context);
    return (
        <div onChange={(e) => setSearchType(e.target.value)}>
            <h4>Buscar por:</h4>
            <input type="radio" name="radio" value="person"/>Artista
            <input type="radio" name="radio" value="movie"/>Filme
            <input type="radio" name="radio" value="tv"/>Série
        </div>
    );
}