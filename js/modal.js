const button = document.querySelector('.btn__criarConta');
const modal = document.querySelector('.modalCriarConta');
const close = document.querySelector('.closeModalCriar');
//Quando clicar no butão Criar conta! vai deixar a modal com display block
button.addEventListener('click', function abrirModalCriarConta(e){
    e.preventDefault();
     modal.style.display = "block";
})

//Quando clicar no X vai fechar a modal deixando ela com display none
close.addEventListener('click', function(){
    modal.style.display = "none";
})



    
