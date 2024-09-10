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
    let pokemonsOfCategory = [];
    let allCardsDiv = document.createElement("div");
    allCardsDiv.style.display = "flex";

    event.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/type/${type}`).then((response) => {
      // location.reload();
      let typeDiv = document.createElement("img");
      typeDiv.setAttribute("class", "typeDiv");
      log(response.data.sprites["generation-iii"]);
      typeDiv.src = response.data.sprites["generation-iii"].colosseum.name_icon;
      typeDiv.alt = response.data.name + "'s category's image";
      allCardsDiv.appendChild(typeDiv);
      for (let i = 0; i < noOfPokemons; i++) {
        if (i == response.data.pokemon.length) {
          break;
        }
        let arr = response.data.pokemon[i].pokemon.url.split("/");
        log(arr);
        // log(arr);
        let id = arr[arr.length - 2];
        pokemonsOfCategory.push(parseInt(id));
        // let pokemon = document.createElement("div");
        // pokemon.innerHTML = response.data.pokemon[i].pokemon.name;
        // let card = document.createElement("div");
        // card.setAttribute("class",`pokemon-${response.data.pokemon[i].pokemon.name}`);
        // let img = document.createElement("img");
        // // axios.get(`${response.data.pokemon[i].pokemon}`)

        // // log(response.data.pokemon[i]);
        // pokemonsOfCategory.appendChild(pokemon);
      }
      log(pokemonsOfCategory);
      // pokemonsOfCategory.sort();
      log(pokemonsOfCategory);
      let promises = pokemonsOfCategory.map((id) => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      });
      Promise.all(promises)
        .then((responses) => {
          log(responses);
          responses.forEach((response) => {
            let card = document.createElement("div");
            card.setAttribute("class", `pokemon ${response.data.name}`);
            let img = document.createElement("img");
            img.src = response.data.sprites.front_default;
            img.alt = response.data.name + "'s image";
            let caption = document.createElement("p");
            caption.innerHTML = response.data.name;
            card.appendChild(img);
            card.appendChild(caption);

            allCardsDiv.appendChild(card);
          });
          // pokemonsOfCategory.length;
          // document.body.appendChild(pokemonsOfCategory);
          // document.body.innerHTML = response.data.pokemon;
        })
        .catch(function (e) {
          log(e);
        });
    });
    // log(promises);

    // .then(() => {
    //   pokemonsOfCategory.sort();
    //   log(pokemonsOfCategory);
    //   for (let i = 0; i < pokemonsOfCategory.length; i++) {
    //     log(pokemonsOfCategory[i]);
    //     let api = `https://pokeapi.co/api/v2/pokemon/${pokemonsOfCategory[i]}`;
    //     // log(api);
    //     axios.get(api).then((response) => {
    //       log(response.data.sprites.front_default);

    //       let card = document.createElement("div");
    //       card.setAttribute("class", `pokemon ${response.data.name}`);
    //       let img = document.createElement("img");
    //       img.src = response.data.sprites.front_default;
    //       img.alt = pokemonsOfCategory[i];
    //       let caption = document.createElement("p");
    //       caption.innerHTML = response.data.name;
    //       card.appendChild(img);
    //       card.appendChild(caption);

    //       allCardsDiv.appendChild(card);
    //       // document.body.appendChild()
    //     });
    //   }
    // });
    document.body.appendChild(allCardsDiv);
  }
});

topDiv.appendChild(categories);
topDiv.appendChild(numberOfPokemons);
topDiv.appendChild(FindPokemons);
document.body.appendChild(topDiv);
