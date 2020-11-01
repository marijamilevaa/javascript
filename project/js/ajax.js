/**
 * Basic call using XHR (legacy code)
 */

// let button = document.getElementById("btn");

// button.onclick = function () {
//   loadDoc();
// };

// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let ul = document.getElementById("todos");

//       for (let todo of JSON.parse(this.responseText)) {
//         let li = document.createElement("li");

//         li.innerHTML = todo.title;

//         ul.appendChild(li);
//       }
//     }
//   };

//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
//   xhttp.send();
// }

/**
 * Ajax with fetch API
 */

function loadDocWithFetch() {
  return fetch("https://jsonplaceholder.typicode.com/todos");
}

let result = loadDocWithFetch();

console.log(result instanceof Promise);

result
  .then(function (result) {
    return result.json();
  })
  .then(function (data) {
    let ul = document.getElementById("todos");

    for (let todo of data) {
      let li = document.createElement("li");

      li.innerHTML = todo.title;

      ul.appendChild(li);
    }
  })
  .catch(function (err) {
    console.log("an error occured");
    console.log(err);
  })
  .finally(function () {
    console.log("Finish the code");
  });
