//let mainMenu = document.getElementById("main-menu");
let h1 = document.querySelector("h1");
let divs = document.getElementsByTagName("div");
let container = document.querySelector("div.container");

h1.innerHTML = "Title";

container.style.backgroundColor = "red";

/* Create menu like structure, very similar to the one from the array exercises,
but instead of using the concatenating strings, use the dom methods.
*/
let mainMenu = document.getElementById("main-menu");
let ul = document.createElement("ul");
let a = ["index2", "about", "contact"];

// ul.style.listStyle = "none";

for (let el of a) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = el;

  a.setAttribute("href", el + ".html");

  li.appendChild(a);
  ul.appendChild(li);
}

mainMenu.appendChild(ul);
