let imagesList = ['nature.png','sun.png','tree.png','landscape.png'];
let currentIndex = 0;

let imageListElement = document.getElementById('active-image');

imageListElement.src = `./images/${imagesList[currentIndex]}`;
imageListElement.alt = imagesList[currentIndex];

function nextImage() {
  currentIndex = (currentIndex + 1) % imagesList.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imagesList.length) % imagesList.length;
  updateImage();
}

function updateImage() {
  imageListElement.src = `./images/${imagesList[currentIndex]}`;
  imageListElement.alt = imagesList[currentIndex];
}