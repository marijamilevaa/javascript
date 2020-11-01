let a = document.querySelector("a");
let h1 = document.querySelector("h1");
let header = document.querySelector("header");

// mainMenu.onclick = function (e) {
//   console.log(e.type);
// };

// mainMenu.onclick = function (e) {
//   console.log(e.target);
// };

a.addEventListener("click", function (e) {
  e.preventDefault();
});

header.onclick = function (e) {
  console.log(e.currentTarget);
};

h1.onclick = function (e) {
  console.log(e.currentTarget);
};

// mainMenu.addEventListener("click", function (e) {
//   console.log(e.target);
// });
