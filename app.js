// let title = document.getElementById("nav-header");
// title.style.borderBottom = "3px solid black";

// let items = document.getElementsByClassName("list-group-items");
// items[1].style.backgroundColor = "yellow";

// if we want to change all items we need to loop them and set property ech time the loop runs
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "grey";
// }

// querySelector - only grabs the first of kind

// let getHeader = document.querySelector("h2");
// getHeader.style.backgroundColor = "blue";
// let input = document.querySelector("input");
// input.placeholder = "Ex-call mom";

// let lis = document.querySelectorAll('li');
// creat elements using js
// let list = document.querySelector("ul");
// newh1 = document.createElement("li");
// newh2 = document.createElement("li");
// // console.log(newh1);
// newh1.textContent = "hellooooo";

// list.appendChild(newh1);

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }
let todolist = document.querySelector(".todolist");
let TextInput = document.querySelector(".input");
let btn = document.querySelector(".btn");
let form = document.querySelector("#form");
let newLi = document.createElement("li");

// btn.addEventListener("click", function () {
//   let newLi = document.createElement("li");
//   //   newLi.textContent = TextInput.nodeValue;

//   oEl.appendChild(newLi);

//   //   alert("hi");
// });
form.onsubmit = function (event) {
  event.preventDefault();
  newLi.textContent = TextInput.value;
  todolist.appendChild(newLi);
  TextInput.value = "";
};
