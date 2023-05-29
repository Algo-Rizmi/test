const container = document.getElementById("container");
const paragraph = document.createElement("p");

// paragraph.textContent = "Hello, World!";
// container.appendChild(paragraph);

function findFirstNonRepeatedCharacter(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount + 1 : 1;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  }
  return null;
}

let row = 5;
let output = "";

for (let i = 0; i <= row; i++) {
  for (let j = 1; j <= row - i; j++) {
    output += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    output += "*";
  }

  output += "\n";
}

console.log(output);

//OEFENING 2
function min(num, nume) {
  if (num > nume) {
    return nume;
  } else {
    return num;
  }
}

//console.log(min(5, 10));
//console.log(min(0, 10)); //output 0

//Oefening 3

function aantalKlinkers(str) {
  let charCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      char === "a" ||
      char === "o" ||
      char === "u" ||
      char === "e" ||
      char === "i" ||
      char === "y"
    ) {
      charCount++;
    }
  }
  return charCount;
}

let dit = aantalKlinkers("woordkoura");
console.log(dit);

//Oefening Hoofdletter

function eerstLetter(str) {
  let woord = "";
  for (let i = 0; i < str.length - (str.length - 1); i++) {
    let char = str[i];
    let toUpper = char.toUpperCase();
    woord += toUpper;
  }

  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    woord += char;
  }

  return woord;
}

let answ = eerstLetter("barry");
let answ1 = eerstLetter("tigrin");
let answ2 = eerstLetter("harry");
let answ3 = eerstLetter("necromancer");
console.log(answ);

//Oefening 4

function countBs(str) {
  let countBees = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "B") {
      countBees++;
    }
  }
  return countBees;
}

console.log(countBs("BBbbBC"));

function countChar(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    const karakter = str[i];
    if (karakter === char) {
      counter++;
    }
  }
  return counter;
}

console.log(countChar("dikzzakZ", "z"));

//Hoofdstuk 3 Arrays
/*
const namenArray = ["kawlu", "Lawlu", "wawlu"];
const jarenArray = [1900, 1950, 1980];

const naam = prompt("geef naame: ");
const indexFound = namenArray.findIndex((element) => element == naam);
if (indexFound != -1) {
  alert(jarenArray[indexFound]);
} else {
  alert("naam niet gevonden");
}

*/

//Todo lijst

const listTodo = ["cat", "dog", "bled", "monster"];

function addTodo(str) {
  listTodo.push(str);
}

function removeFirstTodo(str) {
  listTodo.shift(str);
}

function addFirstTodo(str) {
  listTodo.unshift(str);
}

//Smallest number from an Array

const numbers = [7, 3, 5, 15, 18];

function smallestNumbers(arr) {
  const list = [];

  if (arr.length < 2) {
    return "Minder dan 2 kan ik niet";
  }

  let smallest = arr[0];
  let secondSmallest = arr[1];

  if (smallest > secondSmallest) {
    let temp = smallest;
    smallest = secondSmallest;
    secondSmallest = temp;
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return [smallest, secondSmallest];
}
console.log(smallestNumbers(numbers));

//4. Maak een scripts waarin je 1000 keer twee willekeurige getallen genereert tussen 1 en 6 (de ogen van een dobbelsteen). De 1000 resultaten neem je op in een array.
//Je maakt ook een array van 11 elementen waarin je noteert hoeveel maal de computer het getal 2,3,4...12 heeft gegenereerd (met andere woorden een histogram).
//Deze laatste array print je op een HTML pagina. Maak hiervoor 2 functies.

const dobbelsteen = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const duizendGetallen = [];
const histogram = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function generateNumbers() {
  for (let i = 0; i < 1000; i++) {
    duizendGetallen[i] = dobbelsteen() + dobbelsteen();
  }
}

generateNumbers();
for (let i = 0; i < duizendGetallen.length; i++) {
  histogram[duizendGetallen[i]] = histogram[duizendGetallen[i]] + 1;
}

console.log(histogram);

//We vragen een text en zet het eerste letter in hoofdletter
function hoofdLetterText(str) {
  let text = "";

  for (let i = 0; i < 1; i++) {
    let eerstL = str[i].toUpperCase();
    text += eerstL;
  }

  for (let i = 1; i < str.length; i++) {
    text += str[i];
  }
  return text;
}

console.log(hoofdLetterText("ik ben een grote man."));

//5.Vraag een tekst op, en begin elk woord van je tekst met een hoofdletter
//bekijk split methode (beschrijf wat de split functie doet, en gebruik dit in je oplossing

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const inputZin = prompt("Write here your text: ");
let outPutZin = "";

const splitZin = inputZin.split(" ");
for (let woord of splitZin) {
  let cappedWoord = woord[0].toUpperCase() + woord.substring(1);
  outPutZin += cappedWoord + " ";
}

console.log(outPutZin);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//reverse a word

function reverseWord(str) {
  let text = "";
  for (let i = str.length - 1; i >= 0; i--) {
    text += str[i];
  }
  return text;
}

console.log(reverseWord("vloek"));

//Week 4 Objects oefening 1

//Class notation
class Summer {
  constructor() {
    this.sum = 0;
  }

  getCurrentSum() {
    return this.sum;
  }
  add(getal) {
    this.sum += getal;
  }
}

//Object literal notation

// const Summer = {
//   sum: 0,
//   getCurrentSum: function () {
//     return sum;
//   },
//   add: function (getal) {
//     this.sum += getal;
//   },
// };

const s1 = new Summer();
const s2 = new Summer();
s1.add(10);
s1.add(20);
s2.add(30);
s2.add(5);
// prints 30
console.log(s1.getCurrentSum());
// prints 35
console.log(s2.getCurrentSum());

// De code toont een API voor een JavaScript "Screen" klasse. Ik heb de methodes al geimplementeerd. Het is aan u om de constructor en accessors te maken zodat de uitvoering werkt:

class Screen {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  diagonal() {
    console.log(this.width + " x " + this.height);
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }

  get width() {
    return this.w;
  }

  set width(w) {
    this.w = w;
  }

  get height() {
    return this.h;
  }

  set height(h) {
    this.h = h;
  }

  dimensions(definition) {
    let dimensions = definition.split("x");
    this.width = parseInt(dimensions[0]);
    this.height = parseInt(dimensions[1]);
    console.log(this.height + "x" + this.width);
  }
}

//UITVOERING
let screen = new Screen(0, 0);
screen.dimensions("500x300");
screen.width = 400;
console.log(screen.diagonal()); // Should print 500

// Implementeer de functie sortByPriceAscending.
// Deze functie accepteert een string in JSON formaat (object literals). Bekijk even deze link om een JSON string om te zetten naar objecten:
// How to convert a JSON string into a JavaScript object? (tutorialspoint.com)

// Deze functie moet de lijst ordenen op prijs in stijgende volgorde. Indien 2 producten dezelfde prijs hebben moeten ze in alfabetische volgorde per naam staan.
// Dus:

// geeft dit terug:

// ('{"name":"eggs","price":1},{"name":"rice","price":4.04},{"name":"coffee","price":9.99}');

// In code ziet dit er als volgt uit:

// Je taak: maak de functie sortByPriceAscending.

function sortByPriceAscending(jsonString) {
  let object = JSON.parse(jsonString);

  object.sort((a, b) => {
    if (a.price - b.price != 0) return a.price - b.price;
    else {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
  });
  return object;
}

console.log(
  sortByPriceAscending(
    '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04},{"name":"abc","price":4.04}]'
  )
);

//Labo 5: Browser

class persoon {
  constructor(land, stad, house) {
    this.land = land;
    this.stad = stad;
    this.house = house;
  }
}

let p1 = new persoon("Ned", "Zoetermeer", "babe");
let p2 = new persoon("FR", "Paris", "omid");
let p3 = new persoon("BE", "antwerpen", "yaser");
p1.house = "hamza";
console.log(p2);
console.log(p3);
console.log(Object.keys(p1));
console.log(Object.values(p2));

let p4 = {
  naam: "haku",
  id: 123,
  fight: 45,
  print: function () {
    console.log(this.naam + " " + this.id + " " + this.fight);
  },
};

console.log(p4.print());

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
