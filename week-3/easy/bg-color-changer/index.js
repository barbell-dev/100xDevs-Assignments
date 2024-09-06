let log = console.log;

document.addEventListener("DOMContentLoaded", function () {
  let bgC = localStorage.getItem("backgroundColor");
  // log(document.children);
  bgC
    ? (document.body.style.backgroundColor = bgC)
    : (document.body.style.backgroundColor = "white");
  let buttonPanel = document.querySelectorAll("div.button-panel > button");
  log(buttonPanel[1]);

  buttonPanel[0].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[0].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  buttonPanel[1].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[1].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  buttonPanel[2].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[2].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  buttonPanel[3].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[3].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  buttonPanel[4].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[4].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  buttonPanel[5].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[5].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  buttonPanel[6].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[6].id;
    localStorage.setItem(
      "backgroundColor",
      document.body.style.backgroundColor
    );
  };
  let addedButtons = localStorage.getItem("addedButtons");
  if (addedButtons) {
    log(addedButtons);
  }
});
function addColour() {
  //check if the colour exists.
  //if not, add it to the panel.

  let buttonPanel = document.querySelector(".button-panel");
  log(buttonPanel.children);
  let color = document.querySelector("#colourPicker").value;
  // log(color);
  let found = 0;
  for (let i = 0; i < buttonPanel.children.length; i++) {
    if (buttonPanel.children[i].id === color) {
      found = 1;
      break;
    }
  }
  if (found == 1) {
    alert("Colour already there in the colour palette.");
    return;
  } else {
    let newColour = document.createElement("button");
    newColour.id = document.querySelector("input").value;
    let details = ntc.name(document.querySelector("input").value);
    newColour.innerHTML = details[1];
    newColour.onclick = function () {
      document.body.style.backgroundColor = details[0];
      localStorage.setItem("backgroundColor", details[0]);
      let addedButtons = localStorage.getItem("addedButtons");
      addedButtons.push(newColour);
      localStorage.setItem("addedButtons", addedButtons);
    };
    // log();
    // buttonPanel.appendChild(newColour);
    let temp = buttonPanel.children[buttonPanel.children.length - 1];
    buttonPanel.removeChild(
      buttonPanel.children[buttonPanel.children.length - 1]
    );
    buttonPanel.appendChild(newColour);
    buttonPanel.appendChild(temp);

    // buttonPanel.children[buttonPanel.children.length - 2] = temp;

    // localStorage.setItem("DOM", document.);
    // log(localStorage);
    // location.reload();
  }
}
