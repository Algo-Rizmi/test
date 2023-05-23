//   // Create the table element
//   const table = document.createElement("table");

//   // Create the table header row
//   const headerRow = document.createElement("tr");
//   const headerNames = ["name", "height", "place"];
//   for (const headerName of headerNames) {
//     const headerCell = document.createElement("th");
//     headerCell.textContent = headerName;
//     headerRow.appendChild(headerCell);
//   }
//   table.appendChild(headerRow);

//   // Create the table data rows
//   for (const mountain of MOUNTAINS) {
//     const dataRow = document.createElement("tr");

//     const nameCell = document.createElement("td");
//     nameCell.textContent = mountain.name;
//     dataRow.appendChild(nameCell);

//     const heightCell = document.createElement("td");
//     heightCell.textContent = mountain.height;
//     dataRow.appendChild(heightCell);

//     const placeCell = document.createElement("td");
//     placeCell.textContent = mountain.place;
//     dataRow.appendChild(placeCell);

//     table.appendChild(dataRow);
//   }

//   // Append the table to the document body
//   document.body.appendChild(table);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// document.addEventListener("DOMContentLoaded", () => {
//   const MOUNTAINS = [
//     { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
//     { name: "Everest", height: 8848, place: "Nepal" },
//     { name: "Mount Fuji", height: 3776, place: "Japan" },
//     { name: "Vaalserberg", height: 323, place: "Netherlands" },
//     { name: "Denali", height: 6168, place: "UnitedStates" },
//     { name: "Popocatepetl", height: 5465, place: "Mexico" },
//     { name: "Mont Blanc", height: 4808, place: "Italy/France" },
//   ];

//   const table = document.querySelector("table");

//   for (let i = 0; i < MOUNTAINS.length; i++) {
//     let item = MOUNTAINS[i];
//     const tr = document.createElement("tr");

//     for (let j = 0; j < Object.keys(MOUNTAINS[i]).length; j++) {
//       const td = document.createElement("td");
//       let key = Object.keys(item)[j];
//       let text = item[key];
//       td.appendChild(document.createTextNode(text));
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const BOOKS = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Ulysses", author: "James Joyce", year: 1922 },
    { title: "The Odyssey", author: "Homer", year: -800 }, // Estimated year
  ];

  const table = document.querySelector("table");

  for (let i = 0; i < BOOKS.length; i++) {
    const element = BOOKS[i];
    const tr = document.createElement("tr");
    console.log(Object.keys(BOOKS[i]).length);
    console.log(Object.keys(BOOKS[i]));

    for (let j = 0; j < Object.keys(BOOKS[i]).length; j++) {
      const td = document.createElement("td");
      let key = Object.keys(element)[j];
      let text = element[key];
      td.appendChild(document.createTextNode(text));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
});
