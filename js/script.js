const button = document.querySelector('.btn__criarConta');
const modal = document.querySelector('.modalCriarConta');
const close = document.querySelector('.closeModalCriar');

const personalize = document.getElementById('personalize');
const genero = document.querySelector('.genero');
const feminino = document.querySelector(".SM");
const masculino = document.querySelector('.SM2');



//Modal


//Quando clicar no butão Criar conta! vai deixar a modal com display block
button.addEventListener('click', function abrirModalCriarConta(e){
    e.preventDefault();
     modal.style.display = "block";
})

//Quando clicar no X vai fechar a modal deixando ela com display none
close.addEventListener('click', function(){
    modal.style.display = "none";
})

//Window personalize

personalize.addEventListener('click', () => {
    genero.style.display = "block";
})

feminino.addEventListener('click', () =>{
    genero.style.display = "none";
})
masculino.addEventListener('click', () => {
    genero.style.display = "none";
})

//Input validation


const form = document.querySelector('.form');
const form2 = document.querySelector('.form2');
const email2 = document.querySelector('.email2');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const radios = document.querySelector('.radios');
const selects = document.querySelector('.selects');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

form2.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs2();
})

function checkInputs () {
    const emailValue = email.value;
    const passwordValue = password.value;


    if(emailValue === ''){
        setErrorFor(email, 'Email is required!');

    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Please, insert a valid email!');

    }else{
        setSucessFor(email)
        
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password is required!');

    }else if(passwordValue.length < 8){
        setErrorFor(password, 'Must be at least 8 characters long.');

    }else{
        setSucessFor(password);
       
    }
    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
  }



function setErrorFor(input, message){

    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}

function setSucessFor(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}



function checkInputs2 () {
    const email2Value = email2.value;
    const password2Value = password2.value;
    const radiosValue = radios.value;
    const selectsValue = selects.value;


    if(email2Value === ''){
        setErrorFor(email2, 'Email is required!');

    }else if(!checkEmail(email2Value)){
        setErrorFor(email2, 'Please, insert a valid email!');

    }else{
        setSucessFor(email2)
        
    }
    
    //Radios and selects validation remaning. I tried this code, but it didn't work. I will try resolve this, but the app is working. 
    //Suggestions: Add a verification to Name, make a password adviser.
    /*
    if (radiosValue === '') {
        setErrorFor(radios, 'Please choose one.')
    }else{
        setSucessFor(radios);
    }

    if (selectsValue === '') {
        setErrorFor(selects, 'Please select the options.')
    }else{
        setSucessFor(selects)
    }
    */

    if(password2Value === ''){
        setErrorFor(password2, 'Password is required!');

    }else if(password2Value.length < 8){
        setErrorFor(password2, 'Must be at least 8 characters long.');

    }else{
        setSucessFor(password2);
       
    }
    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
  }



function setErrorFor(input, message){

    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}

function setSucessFor(input){
    const formControl = input.parentElement.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
  
