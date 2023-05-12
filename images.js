// Get a reference to the button element and the image container element
const generateBtn = document.getElementById("generate-btn");
const imageContainer = document.getElementById("image-container");

// Array of image URLs
const imageUrls = [];

let imageIndex = 0; // Initialize the image index to 0

const text = document.getElementById("text");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const inputText = text.value;
  imageUrls.push(inputText);
});

// Add an event listener to the button
generateBtn.addEventListener("click", function () {
  // Remove the previous image from the container
  const previousImage = imageContainer.querySelector("img");
  if (previousImage) {
    imageContainer.removeChild(previousImage);
  }

  // Create a new image element and set its source to the next URL in the imageUrls array
  const newImage = document.createElement("img");
  newImage.src = imageUrls[imageIndex];

  // Add the new image to the image container
  imageContainer.appendChild(newImage);

  // Increment the image index and wrap around to 0 if we reach the end of the array
  imageIndex = (imageIndex + 1) % imageUrls.length;
});
