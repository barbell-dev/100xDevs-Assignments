let log = console.log;
import { quizData } from "./data.js";
log(quizData);
let screen = document.createElement("div");
let question = document.createElement("p");
question.innerHTML = "Hello THere";
question.style.fontWeight = "bold";
// document.body.appendChild()
let options = document.createElement("ol");

screen.appendChild(question);
screen.appendChild(options);
document.body.appendChild(screen);
log(document);
