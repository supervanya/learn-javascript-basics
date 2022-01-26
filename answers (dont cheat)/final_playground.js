// var things = [1,2,3,4,5];
// for (var i = 1; i < 100; i++) {
// 	if (i % 3 && i % 5){console.log(i); continue}
//     if (i % 3 == 0) {console.log("ping");}
//     if (i % 5 == 0) {console.log("pong");}
// }

// FOR EACH
// let arr = [1,2,3,4];
// arr.forEach( element => console.log(element) );

// HELPFUL
// 1. Run Live server, that makes the changes show up upon save
// 2. Instal linter + prettier: ESLint is a good one

// MAP
let arrClone = 2;

// Async nature of JavaScript (2nd Runner should come last after 3rd after the 1st)
console.log("First runner");
setTimeout(() => {
  console.log("Second runner");
}, 1000);
console.log("Third runner");

// play sound
function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}

function alertCount(string) {
  alert(`${string} ${counter}`);
}

// Counter
if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

function clearCounter() {
  counter = 0;
  document.querySelector("#counter").innerHTML = counter;
  localStorage.setItem("counter", counter);
}

let counter = localStorage.getItem("counter");

function increment() {
  document.querySelector("#counter").innerHTML = ++counter;
  localStorage.setItem("counter", counter);
  if (counter % 10 === 0 && counter != 0) {
    alert("Multiple of 10!");
  }
}

// Adding event listener to search
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#counter").innerHTML = counter;

  // Adding an event listener to button
  document.querySelector("#button2").onclick = playSound;

  // adding alert to food submit
  document.querySelector("#form").onsubmit = () => {
    const food = document.querySelector("#search").value;
    alert(`You chose ${food}`);
  };

  // dropdown color change
  document.querySelector("#color-change-dd").onchange = function () {
    document.querySelector("#counter").style.color = this.value;
  };

  // adding a color changing capabilities to all color buttons
  let colorButtons = document.querySelectorAll(".changeColor");
  colorButtons.forEach((button) => {
    button.onclick = () => {
      document.querySelector("#counter-title").style.color =
        button.dataset.color;
    };
  });

  // adding ability to add li and disable submit
  // By default, submit button is disabled
  document.querySelector("#submit").disabled = true;

  // Enable button only if there is text in the input field
  document.querySelector("#task").onkeyup = () => {
    let currTask = document.querySelector("#task").value;

    if (currTask.charAt(0) === " ") {
      document.querySelector("#submit").disabled = true;
    } else if (currTask.length > 0) {
      document.querySelector("#submit").disabled = false;
    } else {
      document.querySelector("#submit").disabled = true;
    }
    currTask = currTask.toUpperCase();
  };

  document.querySelector("#new-task").onsubmit = () => {
    // Create new item for list
    const li = document.createElement("li");
    li.innerHTML = document.querySelector("#task").value.toUpperCase();

    // Add new item to task list
    document.querySelector("#tasks").append(li);

    // Clear input field and disable button again
    document.querySelector("#task").value = "";
    document.querySelector("#submit").disabled = true;

    // Stop form from submitting
    return false;
  };

  addLi("added new element!");
});

// modifyimg DOM with JS
function addLi(text) {
  // this is how you add an element to a page
  var myNewP = document.createElement("li");
  myNewP.innerHTML = text;

  // can use prepend(), appendChild()--for compatibility
  document.querySelector("body").append(myNewP);
}

/*
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

{element.addEventListener("onclick", ()=> document.querySelector("h1").style.color = element.innerHTML)}
*/
