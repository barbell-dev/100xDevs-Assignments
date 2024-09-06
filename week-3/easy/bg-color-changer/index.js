let log = console.log;

document.addEventListener("DOMContentLoaded", function () {
  let bgC = localStorage.getItem("backgroundColor");
  // log(document.children);
  bgC
    ? (document.body.style.backgroundColor = bgC)
    : (document.body.style.backgroundColor = "white");
  let buttonPanel = document.querySelectorAll("div.button-panel > button");
  let buttonPanelDiv = document.querySelector(".button-panel");
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
  let addedButtons = JSON.parse(localStorage.getItem("addedButtons"));
  if (addedButtons) {
    // log(addedButtons);
    // // for(let i =0 ;i<)
    for (let i = 0; i < addedButtons.length; i++) {
      // buttonPanel.push((addedButtons[i]));
      // buttonPanelDiv.appendChild(add)
      let newButton = document.createElement("button");
      newButton.style.backgroundColor = addedButtons[i];
      newButton.onclick = function () {
        document.body.style.backgroundColor = addedButtons[i];
        localStorage.setItem("backgroundColor", addedButtons[i]);
      };
      newButton.id = addedButtons[i];
      newButton.innerText = ntc.name(addedButtons[i])[1];
      buttonPanelDiv.appendChild(newButton);
      let temp = buttonPanelDiv.children[buttonPanelDiv.children.length - 1];
      buttonPanelDiv.children[buttonPanelDiv.children.length - 2] =
        buttonPanelDiv.children[buttonPanelDiv.children.length - 1];
      buttonPanelDiv.children[buttonPanelDiv.children.length - 1] = temp;
    }
    // log(addedButtons);
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
    newColour.innerText = details[1];
    newColour.style.backgroundColor = details[0];
    newColour.onclick = function () {
      document.body.style.backgroundColor = details[0];
      localStorage.setItem("backgroundColor", details[0]);
    };
    // log();
    // buttonPanel.appendChild(newColour);
    let temp = buttonPanel.children[buttonPanel.children.length - 1];
    buttonPanel.removeChild(
      buttonPanel.children[buttonPanel.children.length - 1]
    );
    buttonPanel.appendChild(newColour);
    buttonPanel.appendChild(temp);

    let addedButtons = JSON.parse(localStorage.getItem("addedButtons"));
    // log(ref + " herre");
    // let addedButtons = [];
    if (addedButtons) {
      addedButtons.push(newColour.id);
      log(addedButtons);
    } else {
      addedButtons = [];
      addedButtons.push(newColour.id);
      log(addedButtons);
    }
    localStorage.setItem("addedButtons", JSON.stringify(addedButtons));
    // buttonPanel.children[buttonPanel.children.length - 2] = temp;

    // localStorage.setItem("DOM", document.);
    // log(localStorage);
    // location.reload();
  }
}
