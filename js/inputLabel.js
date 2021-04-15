const inputNome = document.querySelector('#nome');
const labelNome = document.querySelector('.label_nome');

const inputEmail = document.querySelector('#email');
const labelEmail = document.querySelector('.label_email');

const inputTelefone = document.querySelector('#telefone');
const labelTelefone = document.querySelector('.label_telefone');

const inputMensagem = document.querySelector('#mensagem');
const labelMensagem = document.querySelector('.label_mensagem');

const inputCNPJ = document.querySelector('#cnpj');
const labelCNPJ = document.querySelector('.label_cnpj');

const inputLink = document.querySelector('#link');
const labelLink = document.querySelector('.label_link');

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

function addOnCNPJ() {
  labelCNPJ.classList.add("active");
}

function removeOnCNPJ() {
  if (inputCNPJ.value === "") {
    labelCNPJ.classList.remove("active");
  }

  return;
}

function addOnLink() {
  labelLink.classList.add("active");
}

function removeOnLink() {
  if (inputLink.value === "") {
    labelLink.classList.remove("active");
  }

  return;
}
