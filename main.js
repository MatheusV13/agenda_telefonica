const form= document.getElementById('agenda-contatos');
const nome=[]
const telefone=[]
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha(){
    const nomeAgenda = document.getElementById('nome-agenda');
    const telefoneAgenda = document.getElementById('tel-agenda');

    nome.push(nomeAgenda.value);
    telefone.push(telefoneAgenda.value);

    let linha = '<tr>';
    linha += `<td>${nomeAgenda.value}</td>`;
    linha += `<td>${telefoneAgenda.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;
}