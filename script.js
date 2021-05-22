let seuVotoPara = document.querySelector('.esquerdo1 span');
let cargo = document.querySelector('.esquerdo2 span');
let descricao = document.querySelector('.esquerdo4');
let aviso = document.querySelector('.parte-inferior');
let lateral = document.querySelector('.direito');
let numeros = document.querySelector('.esquerdo3');

let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    numeroHtml = '';
    
    for(let i=0;i<etapa.numeros;i++) {
        if(i === 0) {
            numeroHtml += '<div class="numeros pisca"></div>';
        } else {
        numeroHtml += '<div class="numeros"></div>';
        }
    }
    
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizarInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else {
            return false;
        }
    });

    console.log("Candidato", candidato);
}
    
function clicou(n) {
    let elNumero = document.querySelector('.numeros.pisca');
    if(numeros !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !=null) {
        elNumero.nextElementSibling.classList.add('pisca');
        }else {
            atualizarInterface();
        }
    }
}
function branco(){
    alert("Clicou em BRANCO!");
}
function corrigir(){
    alert("Clicou em CORRIGIR!");
}
function confirmar(){
    alert("Clicou em CONFIRMAR!");
}

comecarEtapa();