document.getElementById('botaoEnviar').addEventListener('click', validaFormulario)
function validaFormulario(params) {
    if(document.getElementById('nome').value !=""&& document.getElementById('email').value !=""&& document.getElementById('tel').value !=''){ 
    alert('Prontinho!Você receberá as novidades por e-mail')
  } else {
    alert("Por favor, preencha seu nome, e-mail e telefone")
  }
  
}


