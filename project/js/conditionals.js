/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure (var, const, let)
*/
let p;
let o;
let a;

p = "Viktor";
o = { first: "1", second: "2" };
a = ["1", "2"];

//true && true --> true;
//true && false --> false;
//true && false --> false;

// in JavaScript undefind --> false

if (a.first == "1" && (b || c)) {
  console.log(a + b);
} else if (a && b && c) {
  console.log(a + b + c);
} else {
  ("sorry");
}

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

let d = 10;
let c = 20;

switch (d + c) {
  case 30:
    console.log("Zbirot e 10");
    break;
  case 40:
    console.log("Brojot e 20");
    break;
  default:
    console.log("Brojot ne nitu 10 nitu 20.");
}
