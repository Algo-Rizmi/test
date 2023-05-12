const price = 40.0;

showMessage(price);

let bn = function (x, y) {
  let som = x + y;
  console.log(som);
};

bn(20, 40);

let persons = {
  name: "john",
  age: 32,
  partTime: false,
  showInfo: function (realAge) {
    showMessage(this.name) + " is " + realAge;
  },
};

persons.showInfo(67);
console.log(persons.name);
console.log(persons.age);

const header = document.getElementById("message");

header.style.color = "green";
//header.style.fontWeight = 100;

if (review.classList.contains("d-none")) {
  review.classList.remove("d-none");
  button.textContent = "CLOSE REVIEW";
} else {
  review.classList.add("d-none");
  button.textContent = "SEE REVIEW";
}
