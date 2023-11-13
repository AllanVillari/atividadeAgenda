const form = document.getElementById('form-agenda');
const contatos = [];
const numeroContatos = [];
const emailContatos = [];
let linhas = '';



form.addEventListener('submit', function(e){
    e.preventDefault();

adicionaLinha();
atualizaPagina();
atualizaTotalContatos();





});


function adicionaLinha(){
    
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('num-contato');
    const inputEmailContato = document.getElementById('email-contato');
    

    
    
    if(contatos.includes( `${(inputNomeContato.value).toLowerCase()}`.replace(/\s/g, '') )  || numeroContatos.includes( `${(inputNumeroContato.value).toLowerCase()}`.replace(/\s/g, '') ) )
    {
    
        alert(`O contato ${inputNomeContato.value} / ${inputNumeroContato.value}  já foi adicionado`)


        
    
     } else{
        
    
        contatos.push( ((inputNomeContato.value).toLowerCase()).replace(/\s/g, '') );
        emailContatos.push(inputEmailContato.value);
        numeroContatos.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value }</td>`;
        linha += '</tr>';
        
        linhas +=linha;
        
        
        inputNomeContato.value = '';
        inputEmailContato.value = '';
        inputNumeroContato.value = '';
    
        
    
    }
}

    function atualizaPagina(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    function atualizaTotalContatos(){
        const totalContatos = calculaTotalContatos();
        document.getElementById('total-contatos').innerHTML =totalContatos;
       
        
    }


    function calculaTotalContatos(){
        let somaDosContatos = 1;
    
        for( let i = 0; i < contatos.length; i++) {
            somaDosContatos += i;
    }
        return somaDosContatos;
    }