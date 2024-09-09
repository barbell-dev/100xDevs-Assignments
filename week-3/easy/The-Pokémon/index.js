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
FindPokemons.addEventListener("click", function (event) {
  let type = document.querySelector("select").value;
  // log(type);
  let noOfPokemons = document.querySelector("input[type=text]").value;
  if (isNaN(noOfPokemons) || noOfPokemons == "") {
    alert("Enter a valid number of pokemons.");
    return;

    // log("here");
  } else {
    // log("1");
    let pokemonsOfCategory = document.createElement("div");
    event.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/type/${type}`).then((response) => {
      // location.reload();
      for (let i = 0; i < noOfPokemons; i++) {
        if (i == response.data.pokemon.length) {
          break;
        }
        let pokemon = document.createElement("div");
        pokemon.innerHTML = response.data.pokemon[i].pokemon.name;
        // log(response.data.pokemon[i]);
        pokemonsOfCategory.appendChild(pokemon);
      }
      // pokemonsOfCategory.length;
      document.body.appendChild(pokemonsOfCategory);
      // document.body.innerHTML = response.data.pokemon;
    });
  }
});
topDiv.appendChild(categories);
topDiv.appendChild(numberOfPokemons);
topDiv.appendChild(FindPokemons);
document.body.appendChild(topDiv);
