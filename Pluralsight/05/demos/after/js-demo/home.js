const button = document.getElementById("see-review");

button.addEventListener("click", function () {
  if (review.classList.contains("d-none")) {
    review.classList.remove("d-none");
    button.textContent = "CLOSE REVIEW";
  } else {
    review.classList.add("d-none");
    button.textContent = "SEE REVIEW";
  }
});

const values = ["a", "b", "c"];

const newValues = values.splice(2, 0, "hello");

console.log(values);
