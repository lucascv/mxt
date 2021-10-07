export const compararDatas = (listaFilmes) => {
    let dataMaisRecente = new Date('1900-01-01');
    let filmeMaisRecente = '';
  
    listaFilmes.forEach(filme => {
      let data = new Date(filme.release_date);
      if (data > dataMaisRecente) {
        dataMaisRecente = data;
        filmeMaisRecente = filme.original_title;
      }
    });
  
    return filmeMaisRecente;
  }