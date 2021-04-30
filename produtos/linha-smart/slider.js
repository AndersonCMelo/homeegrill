let images = document.querySelectorAll(".slider img");
let currentImageIndex = 0;
let max = images.length;

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");

function nextImage() {

  if (currentImageIndex >= max - 1) {
    return;
  }

  currentImageIndex++

  images[currentImageIndex]
    .classList.add("selected");

  if (currentImageIndex >= max - 1) {
    right.setAttribute("style", "opacity: 0.5; cursor: not-allowed")
  }

  if (currentImageIndex > 0) {
    left.setAttribute("style", "opacity: 1; cursor: pointer")
  }
}

function previousImage() {

  if (currentImageIndex === 0) {
    return;
  }

  images[currentImageIndex]
    .classList.remove("selected")

  currentImageIndex--

  if (currentImageIndex < max - 1) {
    right.setAttribute("style", "opacity: 1; cursor: pointer")
  }

  if (currentImageIndex === 0) {
    left.setAttribute("style", "opacity: 0.5; cursor: not-allowed")
  }
}
