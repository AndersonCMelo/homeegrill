function openProducts() {
  document.querySelector('.menu_produtos')
    .classList.toggle('hide')

  document.querySelector('.seta_baixo_produtos')
    .classList.toggle('on')
}

function openContacts() {
  document.querySelector('.menu_contato')
    .classList.toggle('hide')

  document.querySelector('.seta_baixo_contato')
    .classList.toggle('on')
}

function openProductsMobile() {
  document.querySelector('.menu_produtos_mobile')
    .classList.toggle('hide')
}

function openContactsMobile() {
  document.querySelector('.menu_contato_mobile')
    .classList.toggle('hide')
}
