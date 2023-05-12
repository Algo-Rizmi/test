const btnSubmit = document.getElementById("button");
const btnShow = document.getElementById("show");
const textSubmit = document.getElementById("text");
const imageContainer = document.getElementById("imageContainer");
const pics = [];
let currentIndex = 0;

btnSubmit.addEventListener("click", function () {
  // get the value of the input field
  const imgUrl = textSubmit.value;

  // add the image URL to the array
  pics.push(imgUrl);

  // reset the input field
  textSubmit.value = "";
});

btnShow.addEventListener("click", function () {
  // check if there are any images in the array
  if (pics.length === 0) {
    return;
  }

  // clear the container before displaying the next image
  imageContainer.innerHTML = "";

  // create a new image element and set its source to the current image URL
  const img = new Image();
  img.src = pics[currentIndex];

  // add the image element to the container
  imageContainer.appendChild(img);

  // increment the index and reset to 0 if it exceeds the length of the array
  currentIndex++;
  if (currentIndex >= pics.length) {
    currentIndex = 0;
  }
});
