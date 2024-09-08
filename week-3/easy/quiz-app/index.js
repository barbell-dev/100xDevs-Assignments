let log = console.log;
import { quizData } from "./data.js";
log(quizData);
let qNo = JSON.parse(sessionStorage.getItem("qNo"));
log(qNo);
// if (qNo > quizData.length) {
//   alert("End of quiz.");
//   // return;
// }
if (qNo) {
  if (qNo == quizData.length) {
    let correctAnsCount = 0;
    let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
    // let correctAnswers =
    log(markedAnswers);
    log(quizData);
    for (let i = 0; i < Object.keys(markedAnswers).length; i++) {
      log("heereuh");
      let option = quizData[i].correct;
      let correctAns = quizData[i][option];
      // log(correctAns + " <-here");
      if (markedAnswers[i] == correctAns) {
        correctAnsCount++;
      }
    }
    let entireDiv = document.createElement("div");
    entireDiv.setAttribute("class", "entireDiv");
    let correctAns = [];
    for (let i = 0; i < quizData.length; i++) {
      log("here");
      let correctOption = quizData[i].correct;
      correctAns.push(quizData[i][correctOption]);
      // log(correctAns);
    }
    entireDiv.innerHTML = `You have answered ${correctAnsCount}/${quizData.length} questions correct.`;
    let backButton = document.createElement("button");
    backButton.innerHTML = "Go back";
    backButton.onclick = () => {
      qNo--;
      sessionStorage.setItem("qNo", qNo);
      location.reload();
    };
    entireDiv.appendChild(backButton);

    document.body.appendChild(entireDiv);
    // document.body.appendChild(markedAnswers);
    let userAnswers = document.createElement("div");
    userAnswers.setAttribute("class", "displayAnswers");
    let correctAnswers = document.createElement("div");
    correctAnswers.setAttribute("class", "displayAnswers");
    // log(markedAnswers.length);
    userAnswers.innerHTML = "Your answers : ";
    correctAnswers.innerHTML = "Correct answers : ";
    for (let i = 0; i < Object.keys(markedAnswers).length; i++) {
      userAnswers.innerHTML += "<br>" + markedAnswers[i];
    }
    for (let i = 0; i < quizData.length; i++) {
      const correctKey = quizData[i].correct;
      correctAnswers.innerHTML += "<br>" + quizData[i][correctKey];
    }
    log(userAnswers.innerHTML);
    document.body.appendChild(userAnswers);
    document.body.appendChild(correctAnswers);
    // for(let i=0;i<)
    // document.body.innerText = "KEK Done";
    // document.body.appendChild("<p>Done !</p>");
  } else {
    if (qNo >= 1) {
      let entireDiv = document.createElement("div");
      entireDiv.setAttribute("class", "entireDiv");
      let question = document.createElement("h1");

      question.innerHTML = quizData[qNo].question;
      let optionsDiv = document.createElement("div");
      optionsDiv.setAttribute("class", `qNo ${qNo}`);
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
      submit.setAttribute("class", "submit");
      // submit.style
      submit.innerHTML = "Submit";
      submit.onclick = function () {
        let check = document.querySelector("input[type=radio]:checked");
        if (!check) {
          alert("Mark an option and then it can be submitted.");
          return;
        }
        let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
        if (markedAnswers) {
          markedAnswers[qNo] = document.querySelector(
            "input[type=radio]:checked"
          ).parentElement.children[1].innerHTML;
          sessionStorage.setItem(
            "markedAnswers",
            JSON.stringify(markedAnswers)
          );
        } else {
          markedAnswers = {};
          markedAnswers[qNo] = document.querySelector(
            "input[type=radio]:checked"
          ).parentElement.children[1].innerHTML;
          sessionStorage.setItem(
            "markedAnswers",
            JSON.stringify(markedAnswers)
          );
        }
        // sessionStorage prolly looks  like => []
        // sessionStorage.setItem("markedAnswers",)
        qNo++;
        sessionStorage.setItem("qNo", qNo);

        location.reload();
      };
      let backButton = document.createElement("button");
      backButton.innerHTML = "Go back";
      backButton.onclick = () => {
        // history.back();
        qNo--;
        sessionStorage.setItem("qNo", qNo);
        location.reload();
      };
      // document.body.appendChild(backButton);
      entireDiv.appendChild(question);
      entireDiv.appendChild(optionsDiv);
      entireDiv.appendChild(submit);
      entireDiv.appendChild(backButton);
      // entireDiv.setAttribute()
      document.body.appendChild(entireDiv);
      let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
      log(markedAnswers);
      if (markedAnswers && markedAnswers[qNo]) {
        for (let i = 0; i < optionsDiv.children.length; i++) {
          // log(optionsDiv.children[i].children[1]);

          if (
            optionsDiv.children[i].children[1].innerHTML == markedAnswers[qNo]
          ) {
            optionsDiv.children[i].children[0].checked = true;
          }
        }
      } else {
      }
    } else {
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
      submit.setAttribute("class", "submit");
      submit.innerHTML = "Submit";
      submit.onclick = function () {
        log(
          document.querySelector("input[type=radio]:checked").parentElement
            .children[1].innerHTML
        );
        let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
        if (markedAnswers) {
          markedAnswers[qNo] = document.querySelector(
            "input[type=radio]:checked"
          ).parentElement.children[1].innerHTML;
          sessionStorage.setItem(
            "markedAnswers",
            JSON.stringify(markedAnswers)
          );
        } else {
          markedAnswers = {};
          markedAnswers[qNo] = document.querySelector(
            "input[type=radio]:checked"
          ).parentElement.children[1].innerHTML;
          sessionStorage.setItem(
            "markedAnswers",
            JSON.stringify(markedAnswers)
          );
        }
        // sessionStorage prolly looks  like => []
        // sessionStorage.setItem("markedAnswers",)
        qNo++;
        sessionStorage.setItem("qNo", qNo);

        location.reload();
      };
      let backButton = document.createElement("button");
      backButton.innerHTML = "Go back";
      backButton.onclick = () => {
        // history.back();
        qNo--;
        sessionStorage.setItem("qNo", qNo);
        location.reload();
      };
      // document.body.appendChild(backButton);
      entireDiv.appendChild(question);
      entireDiv.appendChild(optionsDiv);
      entireDiv.appendChild(submit);
      entireDiv.appendChild(backButton);
      document.body.appendChild(entireDiv);
      let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
      log(markedAnswers);
      if (markedAnswers && markedAnswers[qNo]) {
        for (let i = 0; i < optionsDiv.children.length; i++) {
          // log(optionsDiv.children[i].children[1]);

          if (
            optionsDiv.children[i].children[1].innerHTML == markedAnswers[qNo]
          ) {
            optionsDiv.children[i].children[0].checked = true;
          }
        }
      } else {
      }
    }
  }
} else {
  qNo = 0;
  log(qNo);
  // for(let i = 0;i<quizData)
  // log(quizData[qNo].a);
  let entireDiv = document.createElement("div");
  entireDiv.setAttribute("class", "entireDiv");
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
  submit.setAttribute("class", "submit");
  submit.innerHTML = "Submit";
  submit.onclick = function () {
    let check = document.querySelector("input[type=radio]:checked");
    if (!check) {
      alert("Mark an option and then can be submitted.");
      return;
    }
    let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
    log(markedAnswers + "hier");
    if (markedAnswers) {
      markedAnswers[qNo] = document.querySelector(
        "input[type=radio]:checked"
      ).parentElement.children[1].innerHTML;
      sessionStorage.setItem("markedAnswers", JSON.stringify(markedAnswers));
    } else {
      // markedAnswers = {};
      markedAnswers = {};
      markedAnswers[qNo] = document.querySelector(
        "input[type=radio]:checked"
      ).parentElement.children[1].innerHTML;
      sessionStorage.setItem("markedAnswers", JSON.stringify(markedAnswers));
      // sessionStorage.setItem("markedAnswers", JSON.stringify(markedAnswers));
    }

    // sessionStorage prolly looks  like => []
    // sessionStorage.setItem("markedAnswers",)
    qNo++;
    sessionStorage.setItem("qNo", qNo);

    location.reload();
  };
  entireDiv.appendChild(question);
  entireDiv.appendChild(optionsDiv);
  entireDiv.appendChild(submit);
  document.body.appendChild(entireDiv);
  // // option1.innerHTML = quizData[qNo].a;

  let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
  log(markedAnswers);
  // if (markedAnswers) {
  //   markedAnswers[qNo] = document.querySelector(
  //     "input[type=radio]:checked"
  //   ).parentElement.children[1].innerHTML;
  //   sessionStorage.setItem("markedAnswers", JSON.stringify(markedAnswers));
  // } else {
  //   markedAnswers = {};
  //   if (document.querySelector("input[type=radio]:checked")) {
  //     // alert()

  //     markedAnswers[qNo] = document.querySelector(
  //       "input[type=radio]:checked"
  //     ).parentElement.children[1].innerHTML;
  //     sessionStorage.setItem("markedAnswers", JSON.stringify(markedAnswers));
  //   }
  // }
  // let markedAnswers = JSON.parse(sessionStorage.getItem("markedAnswers"));
  //     log(markedAnswers);
  if (markedAnswers && markedAnswers[qNo]) {
    for (let i = 0; i < optionsDiv.children.length; i++) {
      // log(optionsDiv.children[i].children[1]);

      if (optionsDiv.children[i].children[1].innerHTML == markedAnswers[qNo]) {
        optionsDiv.children[i].children[0].checked = true;
      }
    }
  } else {
  }

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
