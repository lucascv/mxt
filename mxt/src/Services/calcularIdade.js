export const calcularIdade = (nascimento) => {
    let hoje = new Date();
    let ano_atual = hoje.getFullYear();
    let mes_atual = hoje.getMonth() + 1;
    let dia_atual = hoje.getDate();

    let arrDatas = nascimento.split('-');

    let quantos_anos = ano_atual - arrDatas[0];

    if (mes_atual > arrDatas[1]) return quantos_anos;
    if (mes_atual < arrDatas[1]) return quantos_anos - 1;
    if (dia_atual >= arrDatas[2]) return quantos_anos;
    return quantos_anos - 1;
}