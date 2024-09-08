//add a dropdown that will display all types.
//another textbox for number
// and Find Pokemons button.

let log = console.log;
let topDiv = document.createElement("form");
topDiv.id = "topDiv";
let categories = document.createElement("select");
let numberOfPokemons = document.createElement("input");
let FindPokemons = document.createElement("button");
FindPokemons.innerHTML = "Find Pokemons";

FindPokemons.setAttribute("type", "submit");
numberOfPokemons.setAttribute("type", "text");
// numberOfPokemons.setAttribute("re")
numberOfPokemons.required = true;
axios.get("https://pokeapi.co/api/v2/type/").then((response) => {
  //   log(response.data.results);
  for (let i = 0; i < response.data.results.length; i++) {
    // log(response.data.results[i].name);
    let option = document.createElement("option");
    option.innerHTML = response.data.results[i].name;
    categories.appendChild(option);
  }
  //   categories.
});
topDiv.appendChild(categories);
topDiv.appendChild(numberOfPokemons);
topDiv.appendChild(FindPokemons);
document.body.appendChild(topDiv);
