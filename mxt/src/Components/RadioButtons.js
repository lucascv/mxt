import React from 'react';

export default function RadioButtons() {
    return (
        <div className="margin15">
            <h4>Buscar por:</h4>
            <input type="radio" name="radio" value="person"/>Artista
            <input type="radio" name="radio" value="movie"/>Filme
            <input type="radio" name="radio" value="tv"/>Série
        </div>
    );
}