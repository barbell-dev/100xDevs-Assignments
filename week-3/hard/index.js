let log = console.log;
let heading = document.createElement("h1");
heading.innerHTML = "Taskify";
let superDiv = document.createElement("div");
superDiv.setAttribute("class", "superDiv");
let addTodoButton = document.createElement("button");
addTodoButton.innerHTML = "Add Todo";

let addTodoPopup = document.createElement("form");
addTodoPopup.setAttribute("class", "addTodoPopup");
// addTodoPopup.innerHTML = "Add Todo";
let popupHeading = document.createElement("h3");
let closeButton = document.createElement("button");
closeButton.innerHTML = "X";
closeButton.onclick = () => {
  var popup = document.querySelector(".addTodoPopup");
  popup.classList.toggle("active");
};
let todo = document.createElement("textarea");
let addButton = document.createElement("button");
addButton.setAttribute("type", "submit");
addButton.id = "add";
addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let todoText = document.querySelector("textarea").value;
  //   console.log("here");
  log(todoText);
  if (todoText.trim() == "") {
    alert("Todo cannot be empty.");
    // return;
  }
});
popupHeading.innerHTML = "Add todo";
todo.placeholder = "Watch Samay Raina before Cohort ;)";
addButton.innerHTML = "Add";
addTodoPopup.appendChild(closeButton);
addTodoPopup.appendChild(popupHeading);
addTodoPopup.appendChild(todo);
addTodoPopup.appendChild(addButton);

// addTodoPopup.style.display = "none";
// superDiv.appendChild(addTodoPopup);
document.body.appendChild(addTodoPopup);
addTodoButton.onclick = () => {
  var blur = document.querySelector(".superDiv");
  console.log(blur);
  blur.classList.toggle("active");
  var popup = document.querySelector(".addTodoPopup");
  popup.classList.toggle("active");
  //   addTodoPopup.style.display = "block";
  //   document.body.innerHTML = "werwe";
  //   document.body.appendChild(addTodoPopup);
  //   wiblur.classList.toggle("");
};
let TODO = document.createElement("div");
let INPROGRESS = document.createElement("div");
let UNDER_REVIEW = document.createElement("div");
let FINISHED = document.createElement("div");
TODO.innerHTML = "Todo";
INPROGRESS.innerHTML = "In progress";
UNDER_REVIEW.innerHTML = "Under review";
FINISHED.innerHTML = "Finished";
// superDiv.appendChild(heading);
superDiv.appendChild(addTodoButton);
superDiv.appendChild(TODO);
superDiv.appendChild(INPROGRESS);
superDiv.appendChild(UNDER_REVIEW);
superDiv.appendChild(FINISHED);
// superDiv.appendChild(addTodoPopup);
superDiv.style.display = "flex";
document.body.appendChild(heading);
document.body.appendChild(superDiv);
