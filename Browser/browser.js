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

//Oefening 3 en 4

document.addEventListener("DOMContentLoaded", () => {
  const div = [
    document.getElementById("change"),
    document.getElementById("change2"),
    document.getElementById("change3"),
  ];
  const button = document.getElementById("verander");
  let index = 0;

  div[index].classList.add("change");

  button.addEventListener("click", () => {
    div[index].classList.toggle("change");
    index = (index + 1) % div.length;
    div[index].classList.toggle("change");
  });

  const klik = document.getElementById("klik");

  klik.addEventListener("click", () => {
    // Get the numbers
    const cells = document.querySelectorAll("#exercise4 td");
    for (let i = 0; i < cells.length; i++) {
      if (parseInt(cells[i].innerText) > 10) {
        cells[i].style.backgroundColor = "red";
      }
    }
  });

  //Oefening 5

  const geboorteJaar = [1980, 1988, 1997, 2000];
  const namen = ["haidar", "amer", "ali", "masud"];

  const submit = document.getElementById("naam");
  const text = document.getElementById("text");
  const divResult = document.getElementById("result");
  function myfunction(naam) {
    const nom = [];
    for (let i = 0; i < namen.length; i++) {
      if (naam === namen[i]) {
        nom.push(geboorteJaar[i]);
      }
    }
    return nom;
  }

  submit.addEventListener("click", () => {
    const naam = text.value;
    const result = myfunction(naam);
    divResult.textContent = result.join(", ");
    console.log(result);
  });

  //Oefening 6

  const duizendGetallen = [];
  const histogram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const dobbelSteen = () => {
    return Math.round(Math.random() * 5) + 1;
  };

  function generateNumbers() {
    for (let i = 0; i < 1000; i++) {
      duizendGetallen[i] = dobbelSteen() + dobbelSteen();
    }
  }

  generateNumbers();
  for (let i = 0; i < duizendGetallen.length; i++) {
    histogram[duizendGetallen[i]] = histogram[duizendGetallen[i]] + 1;
  }

  const btnShow = document.getElementById("dobbel");
  const showDiv = document.getElementById("show");

  btnShow.addEventListener("click", () => {
    const result = histogram;
    showDiv.textContent = result.join(", ");
  });
});



