import { arrayDeObjetos } from "./dados.js"; 

class TabelaServicos {
    constructor(nomeTabela) {
        this.tabela = document.getElementById(nomeTabela);
    }

    adicionarLinha(servico) {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td><input type="checkbox" name="check_servico"></td>
            <td>${servico.TIPO}</td>
            <td>${servico.SERVICO}</td>
            <td>${servico.VALOR}</td>
        `;
        this.tabela.querySelector('tbody').appendChild(novaLinha);
    }
}


const tabela = new TabelaServicos('tabela_tbody');

arrayDeObjetos.forEach(objeto => {
    tabela.adicionarLinha(objeto);
});
