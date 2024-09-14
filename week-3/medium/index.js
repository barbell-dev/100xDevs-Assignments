let log = console.log;
function addField() {
  let preview = document.querySelector(".preview");
  let selectValue = document.querySelector("select").value.toString();
  let labelText = document.querySelector("#input-label-element").value;
  //   if
  let element = document.createElement("input");
  element.type = selectValue;
  log(document.querySelector("select").value.toString());
  log();
  let labelToBeAttached = document.createElement("label");
  labelToBeAttached.innerHTML = labelText;
  preview.appendChild(labelToBeAttached);
  preview.appendChild(element);
  preview.innerHTML += "</br>";
}
