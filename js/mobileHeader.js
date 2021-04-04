/* Abrir/fechar menu - novo botão */
$('.hamburger_js').on('click', function() {
  $('.public_js_9968e1fd').toggleClass('opened');

  $('.hamburger_js').toggleClass('active');
});
/* public_js_42596cb7 */

function openMenu() {
  document
    .querySelector('.hamburger_js')
    .classList
    .toggle('active');
  
  document
    .querySelector('.mobile')
    .classList
    .toggle('opened');
}