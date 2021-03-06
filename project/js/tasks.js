/**
 * 1. Write JS script that will log the following object:
 *  let ob = {
 *     models: ['Ford', ‘Skoda'],
 *     colors: ['Red', 'Grey'],
 *  };
 * from the array given.
 */

let cars = [
  {
    model: "Ford",
    color: "Red",
  },
  {
    model: "Skoda",
    color: "Grey",
  },
  {
    model: "Ford",
    color: "Grey",
  },
];

// let ob = { models: [], colors: [] };

// for (let car of cars) {
//   if (ob.models.indexOf(car.model) == -1) {
//     ob.models.push(car.model);
//   }
//   if (ob.colors.indexOf(car.color) == -1) {
//     ob.colors.push(car.color);
//   }
// }

// console.log(ob);

/**
 * 2. Write JS program that will log the following array:
 * let a = ['Apple', 'Bannana', 'Pear', 'Orange']
 * from the object given.
 */

// let fruits = {
//   subtropical: {
//     area: "Far from the Equator",
//     list: ["Apple", "Pear"],
//   },
//   tropical: {
//     area: "Near the Equator",
//     list: ["Banana", "Orange"],
//   },
// };

// let a = [];

// for (let group in fruits) {
//   a.push(fruits[group].list);
// }

// console.log(a.flat());

/**
 * 3. Write JS program that will switch positions of the keys and values
 * inside a certain object and log the new object.
 *
 * ex. {a: 1, b: 2, c: 3} returns {1: "a", 2: "b", 3: "c"}
 */

// let ob = { a: 1, b: 2, c: 3 };
// let ob2 = {};

// Object.entries(ob).forEach((el) => {
//   ob2[el[1]] = el[0];
// });

// console.log(ob2);
/**
 * 4. Write JS program that will first flatten the given array, and then
 * it will remove the duplicates inside the new array,
 * and in the end it will sort the array.
 *
 * hint: use sort method on arrays
 */

// let numbers = [
//   [7, 2, 4],
//   [4, 3],
//   [5, 1, 6],
//   [9, 3, 7, 2, 4],
// ];
// let newarr = [];

// numbers.flat().forEach((el) => {
//   if (newarr.indexOf(el) == -1) {
//     newarr.push(el);
//   }
// });

// newarr.sort();

// console.log(newarr);

/**
 * 5. Write JS program that will find the longest word from a given string.
 *
 * ex. "I am student in the CodeAcademy school." returns "CodeAcademy"
 */

// let str = "I am student in the CodeAcademy schoollalalala.";

// let a = str.split(" ");
// let word = "";

// a.forEach((el) => {
//   if (el.length > word.length) {
//     word = el;
//   }
// });

// console.log(word);

/**
 * 6. Write JS program that will compare two arrays and will return array
 * that hold only the items found in both of the arrays.
 *
 * ex. ["apple", "watermelon", "lemon", "pear"], ["pear", "orange", "grape", "lemon"] returns ["pear", "lemon"]
 */

// let a = ["apple", "watermelon", "lemon", "pear"];
// let b = ["pear", "orange", "grape", "lemon"];

// a.push("plum");

// let c = a.filter((el) => {
//   // when el === "pear" ==> b.indexOf = 0
//   return b.includes(el);
// });

// console.log(c);

/**
 * 7. Write JS program that will render a button inside a HTML document
 * and when clicked it will change the background-color of the
 * top-level tag rendered in that document(ex. the body tag).
 */

let button;
let topLevelTag;
let color = "#fff";

button = document.getElementById("btn");
topLevelTag = document.getElementsByTagName("body")[0];

// console.log(button);
// console.log(topLevelTag);

button.addEventListener("click", function (e) {
  return onClick(e, topLevelTag, "red");
});

function onClick(e, el, color) {
  e.preventDefault();

  el.style.backgroundColor = color;
}

/**
 * 8. Write JS program that will generate a random quote from the given
 * list of quotes, and it will display into the browser, and alongside
 * it will also list the name of the man behind.
 */

const quotes = [
  {
    quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life",
  },
  {
    quote:
      "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith",
  },
  {
    quote: "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars ",
  },
  {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau",
  },
  {
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh",
  },
  {
    quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly",
  },
];

/**
 * 9. Write JS program that will find words into a string and
 * will capitalize them if they are not, and leave them as
 * they are if they are capitalized.
 *
 * ex. "Head, shoulders, nees and Toes" returns "Head, Shoulders, Nees And Toes"
 *
 * hint: use method toUpperString()
 */

/**
 * 10. Write JS program that will filter out only the words from an array
 * that have the given letter (as a second argument) in them, and
 * if there is no such word it will return "Sorry, no word found";
 *
 * ex. filter(["Wood", "Iron", "Towel", "Bridge"], "w") returns ["Wood", "Towel"]
 *
 * hint: use method indexOf() on strings
 *
 * function findLetter (arr, letter) {
 *  arr.forEach(() => {
 *    el.oindexOf(letter) != -1
 *   })
 *
 *   return newarr;
 * }
 */

//  let arr = [12, 123, 412];
//  let word = "trtratr";

//  console.log(findLetter(arr, word))
