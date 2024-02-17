//constantes globais
const form = document.getElementById("form_contacts");
const nomeContato = document.getElementById("nome");
const telContato = document.getElementById("numero");
const count = document.getElementById("contact_total");

//variáveis globais
let linhas = '';
let contatos = [];
let contatosTel = [];
const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    refreshTable();
    refreshFooter();
    
    resetForm();
});

function addLinha(nome, tel){

    contatos.push(nome)
    contatosTel.push(tel)

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${tel}</td>`;
    linha += '</tr>';

    linhas += linha;
}


function refreshTable(){
    addLinha(nomeContato.value, telContato.value);
    corpoTabela.innerHTML = linhas;
}

function refreshFooter(){
    count.innerHTML = contatosTel.length;
}

function resetForm(){
    nomeContato.value = '';
    telContato.value = '';
}

