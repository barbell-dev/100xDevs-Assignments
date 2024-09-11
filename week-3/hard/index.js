let log = console.log;
let heading = document.createElement("h1");
heading.innerHTML = "Taskify";
let superDiv = document.createElement("div");
superDiv.setAttribute("class", "superDiv");
let addTodoButton = document.createElement("button");
addTodoButton.innerHTML = "Add Todo";
addTodoButton.id = "addTodo";
addTodoButton.style.height = 30;
let addTodoPopup = document.createElement("form");
addTodoPopup.setAttribute("class", "addTodoPopup");
// addTodoPopup.innerHTML = "Add Todo";
let popupHeading = document.createElement("h3");
let closeButton = document.createElement("button");
closeButton.id = "addTodoPopupCloseButton";
closeButton.innerHTML = "X";
closeButton.addEventListener("click", (event) => {
  var blur = document.querySelector(".superDiv");
  console.log(blur);
  blur.classList.toggle("active");
  event.preventDefault();
  var popup = document.querySelector(".addTodoPopup");
  popup.classList.toggle("active");
});
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
  } else {
    let todo = document.createElement("p");
    todo.id = todoText.trim();
    todo.draggable = true;
    todo.innerHTML = todoText.trim();
    TODO.appendChild(todo);
    // pop

    var blur = document.querySelector(".superDiv");
    console.log(blur);
    blur.classList.toggle("active");
    var popup = document.querySelector(".addTodoPopup");
    popup.classList.toggle("active");
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
TODO.className = "container";
let INPROGRESS = document.createElement("div");
INPROGRESS.className = "container";
let UNDER_REVIEW = document.createElement("div");
UNDER_REVIEW.className = "container";
let FINISHED = document.createElement("div");
FINISHED.className = "container";
TODO.innerHTML = "Todo";
INPROGRESS.innerHTML = "In progress";
UNDER_REVIEW.innerHTML = "Under review";
FINISHED.innerHTML = "Finished";
// superDiv.appendChild(heading);
//

//
superDiv.appendChild(addTodoButton);
superDiv.appendChild(TODO);
superDiv.appendChild(INPROGRESS);
superDiv.appendChild(UNDER_REVIEW);
superDiv.appendChild(FINISHED);
// superDiv.appendChild(addTodoPopup);
superDiv.style.display = "flex";
document.body.appendChild(heading);
document.body.appendChild(superDiv);
let draggables = document.querySelectorAll("p");
let containers = document.querySelectorAll(".container");
log(containers);
log(draggables);
draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (e) => {
    e.preventDefault();
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", (e) => {
    e.preventDefault();
    draggable.classList.remove("dragging");
  });
});
containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    log("DRAG OVER");
    // log(container);
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
  });
});
