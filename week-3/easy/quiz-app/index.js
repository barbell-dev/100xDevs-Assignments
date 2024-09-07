let log = console.log;
import { quizData } from "./data.js";
log(quizData);
let qNo = JSON.parse(sessionStorage.getItem("qNo"));
// if (qNo > quizData.length) {
//   alert("End of quiz.");
//   // return;
// }
if (qNo) {
  let entireDiv = document.createElement("div");

  let question = document.createElement("h1");

  question.innerHTML = quizData[qNo].question;
  let optionsDiv = document.createElement("div");
  optionsDiv.setAttribute("class", `qNo-${qNo}`);
  // for (let i = 0; i < quizData[qNo].length; i++) {
  //   log(quizData[qNo].);
  // }
  // // let body = document.body;

  let option1 = document.createElement("input");
  option1.setAttribute("type", "radio");
  option1.setAttribute("name", "question");

  let label1 = document.createElement("label");
  label1.innerHTML = quizData[qNo].a;
  let option1Div = document.createElement("div");
  option1Div.appendChild(option1);
  option1Div.appendChild(label1);
  // option1.appendChild(label1);
  let option2 = document.createElement("input");
  option2.setAttribute("type", "radio");
  option2.setAttribute("name", "question");
  let label2 = document.createElement("label");
  label2.innerHTML = quizData[qNo].b;
  // option2.appendChild(label2);

  let option2Div = document.createElement("div");
  option2Div.appendChild(option2);
  option2Div.appendChild(label2);
  let option3 = document.createElement("input");
  option3.setAttribute("type", "radio");
  option3.setAttribute("name", "question");
  let label3 = document.createElement("label");
  label3.innerHTML = quizData[qNo].c;
  // option3.appendChild(label3);

  let option3Div = document.createElement("div");
  option3Div.appendChild(option3);
  option3Div.appendChild(label3);
  let option4 = document.createElement("input");
  option4.setAttribute("type", "radio");
  option4.setAttribute("name", "question");
  let label4 = document.createElement("label");
  label4.innerHTML = quizData[qNo].d;
  // option4.appendChild(label4);

  let option4Div = document.createElement("div");
  option4Div.appendChild(option4);
  option4Div.appendChild(label4);
  optionsDiv.appendChild(option1Div);
  optionsDiv.appendChild(option2Div);
  optionsDiv.appendChild(option3Div);
  optionsDiv.appendChild(option4Div);
  let submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "Submit";
  submit.onclick = function () {
    log(
      document.querySelector("input[type=radio]:checked").parentElement
        .children[1].innerHTML
    );
    // sessionStorage prolly looks  like => []
    qNo++;
    sessionStorage.setItem("qNo", qNo);
    location.reload();
  };
  entireDiv.appendChild(question);
  entireDiv.appendChild(optionsDiv);
  entireDiv.appendChild(submit);
  document.body.appendChild(entireDiv);
} else {
  qNo = 0;
  // for(let i = 0;i<quizData)
  // log(quizData[qNo].a);
  let entireDiv = document.createElement("div");

  let question = document.createElement("h1");

  question.innerHTML = quizData[qNo].question;
  let optionsDiv = document.createElement("div");
  optionsDiv.setAttribute("class", `qNo-${qNo}`);
  // for (let i = 0; i < quizData[qNo].length; i++) {
  //   log(quizData[qNo].);
  // }
  // // let body = document.body;

  let option1 = document.createElement("input");
  option1.setAttribute("type", "radio");
  option1.setAttribute("name", "question");

  let label1 = document.createElement("label");
  label1.innerHTML = quizData[qNo].a;
  let option1Div = document.createElement("div");
  option1Div.appendChild(option1);
  option1Div.appendChild(label1);
  // option1.appendChild(label1);
  let option2 = document.createElement("input");
  option2.setAttribute("type", "radio");
  option2.setAttribute("name", "question");
  let label2 = document.createElement("label");
  label2.innerHTML = quizData[qNo].b;
  // option2.appendChild(label2);

  let option2Div = document.createElement("div");
  option2Div.appendChild(option2);
  option2Div.appendChild(label2);
  let option3 = document.createElement("input");
  option3.setAttribute("type", "radio");
  option3.setAttribute("name", "question");
  let label3 = document.createElement("label");
  label3.innerHTML = quizData[qNo].c;
  // option3.appendChild(label3);

  let option3Div = document.createElement("div");
  option3Div.appendChild(option3);
  option3Div.appendChild(label3);
  let option4 = document.createElement("input");
  option4.setAttribute("type", "radio");
  option4.setAttribute("name", "question");
  let label4 = document.createElement("label");
  label4.innerHTML = quizData[qNo].d;
  // option4.appendChild(label4);

  let option4Div = document.createElement("div");
  option4Div.appendChild(option4);
  option4Div.appendChild(label4);
  optionsDiv.appendChild(option1Div);
  optionsDiv.appendChild(option2Div);
  optionsDiv.appendChild(option3Div);
  optionsDiv.appendChild(option4Div);
  let submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerHTML = "Submit";
  submit.onclick = function () {
    log(
      document.querySelector("input[type=radio]:checked").parentElement
        .children[1].innerHTML
    );
    // sessionStorage prolly looks  like => []
    qNo++;
    sessionStorage.setItem("qNo", qNo);
    location.reload();
    // log(qNo);
  };
  entireDiv.appendChild(question);
  entireDiv.appendChild(optionsDiv);
  entireDiv.appendChild(submit);
  document.body.appendChild(entireDiv);
  // // option1.innerHTML = quizData[qNo].a;

  // option2.innerHTML = quizData[qNo].b;
  // option3.innerHTML = quizData[qNo].c;
  // option4.innerHTML = quizData[qNo].d;
  // optionsDiv.appendChild(option1);
  // optionsDiv.appendChild(option2);
  // optionsDiv.appendChild(option3);
  // optionsDiv.appendChild(option4);
  // questionDiv.appendChild(question);
  // questionDiv.appendChild(optionsDiv);
  // document.body.appendChild(questionDiv);
  // log(document.body.children);
}
