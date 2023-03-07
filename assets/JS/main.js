var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', criarItem);
var btRemover = document.getElementById('btRemover')
btRemover.addEventListener('click', removerItem);
var controleItem = 0;

function criarItem(){
    let tarefaAdicionada = document.getElementById('tarefaAdicionada').value;
    console.log(tarefaAdicionada);
    let sectionList = document.getElementsByClassName('list')[0];

    let divTarefa = document.createElement('div');
    divTarefa.setAttribute('id', `item${controleItem}`);
    sectionList.appendChild(divTarefa)

    let checkboxDivTarefa = document.createElement('input');
    checkboxDivTarefa.setAttribute('type', 'checkbox');

    let pDivTarefa = document.createElement('label');
    let textDivTarefa = document.createTextNode(tarefaAdicionada);

    pDivTarefa.appendChild(textDivTarefa);
    divTarefa.appendChild(checkboxDivTarefa);
    divTarefa.appendChild(pDivTarefa);

    controleItem ++;
    console.log(controleItem)
}
function removerItem(){
    let paiDivTarefa = document.getElementsByClassName('list')[0];
    paiDivTarefa.removeChild(paiDivTarefa.lastElementChild);
    controleItem--;
}