let log = console.log;

document.addEventListener("DOMContentLoaded", function () {
  let buttonPanel = document.querySelectorAll("button");
  buttonPanel[0].onclick = function () {
    // log(buttonPanel[0].id);
    document.body.style.backgroundColor = buttonPanel[0].id;
  };
});
