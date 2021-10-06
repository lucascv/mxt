export const handleSearchType = (type) => {
    if (type === 'tv') return 'nenhuma série';
    if (type === 'movie') return 'nenhum filme';
    if (type === 'person') return 'nenhum artista';
    return 'nada';
}