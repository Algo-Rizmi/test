document.addEventListener("DOMContentLoaded", () => {
  let image = document.getElementById("myImage");

  document.addEventListener("keydown", (event) => {
    // rest of your code...
    // Get the current width and height of the image.
    let width = image.offsetWidth;
    let height = image.offsetHeight;

    if (event.key === "ArrowUp") {
      width = width * 1.1;
      height = height * 1.1;

      if (width > 280 || height > 280) {
        image.src = "explosion.gif";
      } else {
        image.style.width = width + "px";
        image.style.height = height + "px";
      }
    } else if (event.key === "ArrowDown") {
      width = width * 0.9;
      height = height * 0.9;
      image.style.width = width + "px";
      image.style.height = height + "px";
    }
    console.log(width + " " + height);
  });
});
