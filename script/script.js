const form = document.querySelector('#form');
const nameInput= document.querySelector('#name');
const cpflInput = document.querySelector('#cpf');
const emailInput = document.querySelector('#email');
const telefoneInput = document.querySelector('#telefone');
const passwordInput = document.querySelector('#password');
const jobInput = document.querySelector('#job');
const messagetextarea = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // verifica se o nome está vazio 
    if(nameInput.value === '') {
        alert('Por favor, preencha o seu nome');
        return;
    }

    // verificar se o email estra preenchido e se é vallido 
    if(emailInput.value === ''|| !isEmailValid(emailInput.value)){
        alert('Por favor, preencha o seu email');
        return;
    }


    // verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)) {
        alert('A senha precisa de pelo menos 8 dígitos');
        return;
    }

    // verifica se a situaçãp foi selecionada
    if(jobInput.value === ''){
        alert('Por favor, selecione a sua situação.');
        return;
    }

    // verifica se a mensagem está preenchida 
    if(messagetextarea.value === ''){
        alert('Por favor, escreva uma mensagem');
    }



    // Verifica se o CPF está preenchido e é válido
if (cpflInput.value === '' || !isCPFValid(cpflInput.value)) {
    alert('Por favor, preencha um CPF válido');
    return;
  }
  


    // se todos os campos estiverem corretamente preenchidos, envie o form

    form.submit();


} );


//função que valida email
function isEmailValid(email) {

    //criar uma regez para validar email

    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );

    if (emailRegex.test(email)){
        return true;
    }
    return false; 

}


// Função que valida a senha 
function validatePassword(password, minDigits) {
    if(password.length >= minDigits){
        //senha válida
        return true
    }
        //senha inválida
    return false
}






function isCPFValid(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais (ex.: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }
  
    // Verifica se o primeiro dígito verificador é válido
    if (parseInt(cpf.charAt(9)) !== digit) {
      return false;
    }
  
    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }
  
    // Verifica se o segundo dígito verificador é válido
    if (parseInt(cpf.charAt(10)) !== digit) {
      return false;
    }
  
    // CPF válido
    return true;
  }