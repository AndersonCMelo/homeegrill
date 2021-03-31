const product1 = document.querySelector('.product1');
const product2 = document.querySelector('.product2');
const product3 = document.querySelector('.product3');
const product4 = document.querySelector('.product4');

const productInfo1 = document.querySelector('.product_info1');
const productInfo2 = document.querySelector('.product_info2');
const productInfo3 = document.querySelector('.product_info3');
const productInfo4 = document.querySelector('.product_info4');

function openProduct1() {
  // esconde a informação
  productInfo2.classList.remove('on');
  productInfo3.classList.remove('on');
  productInfo4.classList.remove('on');

  // ajusta a largura dos boxs
  product1.setAttribute("style", "width: 37%");
  product2.setAttribute("style", "width: 21%");
  product3.setAttribute("style", "width: 21%");
  product4.setAttribute("style", "width: 21%");

  // mostra a informação depois de 200 ms
  setTimeout(function() {
    productInfo1.classList.add('on');
  }, 200);

  // @media (max-width: 1050px)
  if (window.matchMedia("(max-width: 1050px)").matches) {
    product1.setAttribute("style", "width: 46%");
    product2.setAttribute("style", "width: 18%");
    product3.setAttribute("style", "width: 18%");
    product4.setAttribute("style", "width: 18%");
  }
};

function openProduct2() {
  productInfo1.classList.remove('on');
  productInfo3.classList.remove('on');
  productInfo4.classList.remove('on');

  product1.setAttribute("style", "width: 21%");
  product2.setAttribute("style", "width: 37%");
  product3.setAttribute("style", "width: 21%");
  product4.setAttribute("style", "width: 21%");

  setTimeout(function() {
    productInfo2.classList.add('on');
  }, 200);

  if (window.matchMedia("(max-width: 1050px)").matches) {
    product1.setAttribute("style", "width: 18%");
    product2.setAttribute("style", "width: 46%");
    product3.setAttribute("style", "width: 18%");
    product4.setAttribute("style", "width: 18%");
  }
};

function openProduct3() {
  productInfo1.classList.remove('on');
  productInfo2.classList.remove('on');
  productInfo4.classList.remove('on');

  product1.setAttribute("style", "width: 21%");
  product2.setAttribute("style", "width: 21%");
  product3.setAttribute("style", "width: 37%");
  product4.setAttribute("style", "width: 21%");

  setTimeout(function() {
    productInfo3.classList.add('on');
  }, 200);

  if (window.matchMedia("(max-width: 1050px)").matches) {
    product1.setAttribute("style", "width: 18%");
    product2.setAttribute("style", "width: 18%");
    product3.setAttribute("style", "width: 46%");
    product4.setAttribute("style", "width: 18%");
  }
};

function openProduct4() {
  productInfo1.classList.remove('on');
  productInfo2.classList.remove('on');
  productInfo3.classList.remove('on');

  product1.setAttribute("style", "width: 21%");
  product2.setAttribute("style", "width: 21%");
  product3.setAttribute("style", "width: 21%");
  product4.setAttribute("style", "width: 37%");
  
  setTimeout(function() {
    productInfo4.classList.add('on');
  }, 200);

  if (window.matchMedia("(max-width: 1050px)").matches) {
    product1.setAttribute("style", "width: 18%");
    product2.setAttribute("style", "width: 18%");
    product3.setAttribute("style", "width: 18%");
    product4.setAttribute("style", "width: 46%");
  }
};

function showModal() {
  document.querySelector('.new_products')
    .classList.toggle('on');
};
