let a = [1, 2, ""];

let b = {};

console.log(a[0]); // -->  1

console.log(a.length); // --> 3

for (let i = 0; i < a.length; i++) {}

a.push(4);

a.pop();

a.unshift(0);

a.shift();

// Calls with callback function as a parametar
var cb = function (el, i, arr) {
  console.log("El e: " + el);
  console.log("I e: " + i);
  console.log("Array e: " + arr);
};

let person = {
  name: "Viktor",
  walk: function (f) {
    f();
  },
};

person.walk();

a.forEach(function () {});

// a.splice && a.slice()

/* Create a menu-like structure inside the current project with the help of the forEach array method.
During the creation, callback function should check if any of the array element is empty, and if it is
should skip it. The menu array itself does not hold the "home" and "contact" items, which should appear at the
start and at the end position of the menu like structure, so they have to be added programmaticaly.
*/

let menu = "";
let arr = ["about", "services"];
// let nav = document.getElementById("main-menu");

// "<li>home</li><li>about</li>..."

function pure() {
  return arr.slice(0, 2);
}

function pure() {
  return arr.splice();
}

let newArr = pure(arr);
