const inputNome = document.querySelector('#nome');
const labelNome = document.querySelector('.label_nome');

const inputEmail = document.querySelector('#email');
const labelEmail = document.querySelector('.label_email');

const inputTelefone = document.querySelector('#telefone');
const labelTelefone = document.querySelector('.label_telefone');

const inputMensagem = document.querySelector('#mensagem');
const labelMensagem = document.querySelector('.label_mensagem');

function addOnName() {
  labelNome.classList.add("active");
}

function removeOnName() {
  if (inputNome.value === "") {
    labelNome.classList.remove("active");
  }

  return;
}

function addOnEmail() {
  labelEmail.classList.add("active");
}

function removeOnEmail() {
  if (inputEmail.value === "") {
    labelEmail.classList.remove("active");
  }

  return;
}

function addOnTelefone() {
  labelTelefone.classList.add("active");
}

function removeOnTelefone() {
  if (inputTelefone.value === "") {
    labelTelefone.classList.remove("active");
  }

  return;
}

function addOnMensagem() {
  labelMensagem.classList.add("active");
}

function removeOnMensagem() {
  if (inputMensagem.value === "") {
    labelMensagem.classList.remove("active");
  }

  return;
}

