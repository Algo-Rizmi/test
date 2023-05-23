//Oefening1:

// document.addEventListener("DOMContentLoaded", () => {
//   const div = document.getElementById("kleur");
//   const button = document.getElementById("verander");

//   button.addEventListener("click", () => {
//     div.classList.toggle("kleur");
//   });
// });

//Oefening 2:

// document.addEventListener("DOMContentLoaded", () => {
//   const div = document.getElementById("change");
//   const button = document.getElementById("verander");

//   button.addEventListener("click", () => {
//     div.innerHTML = "Verander";
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const div = [
//     document.getElementById("change"),
//     document.getElementById("change2"),
//     document.getElementById("change3"),
//   ];
//   const button = document.getElementById("verander");
//   let index = 0;

//   div[index].classList.add("change");

//   button.addEventListener("click", () => {
//     div[index].classList.toggle("change");
//     index = (index + 1) % div.length;
//     div[index].classList.toggle("change");
//   });
// });


