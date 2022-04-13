let card = document.querySelector(".card");
let card2 = document.querySelector("#card");
let text = document.getElementById("text");
let img = document.querySelector("img");
let nationality = document.querySelector(".nationality");
let club = document.querySelector(".club");
let name = document.querySelector(".name");
let position = document.querySelector(".position");
let number = document.querySelector(".number");
let description = document.querySelector(".description");
let modalPlayerName = document.querySelector(".modal-title");
let cardPlayerName = document.querySelector(".card-title");
let description2 = document.querySelector(".card-text");
let notFounded = document.querySelector(".text-danger");
let loadedText = document.getElementById("myDiv");
let loader = document.getElementById("loader");

function loadPlayers() {
  let name = text.value;
  fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${name}`)
    .then((response) => response.json())
    .then((data) => {
      displayPlayer(data);
    })
    .catch((error) => {
      notFounded.style.display = "block";
      card.style.display = "none";
    });
}
const displayPlayer = (data) => {
  notFounded.style.display = "none";
  card.style.display = "block";
  // player name display in the modal
  modalPlayerName.textContent = data.player[0].strPlayer;
  // player name display in the card
  cardPlayerName.textContent = data.player[0].strPlayer;
  // player nationality display in the modal
  nationality.textContent = data.player[0].strNationality;
  // player clud
  club.textContent = data.player[0].strTeam;
  // player position
  position.textContent = data.player[0].strPosition;
  // player jersey number
  number.textContent = data.player[0].strNumber;
  // player description in the modal
  description.textContent = data.player[0].strDescriptionEN;
  description2.textContent =
    data.player[0].strDescriptionEN.slice(0, 100) + "....";
  // player img
  img.src = data.player[0].strThumb;
};

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value === "") {
    alert("Please enter a valid name!");
    return;
  }
  card2.style.opacity = 0;
  card2.style.pointerEvents = "none";
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    card2.style.pointerEvents = "visible";

    card2.style.opacity = 1;
  }, 1000);
  loadPlayers();
  text.value = "";
});
// Google traslator //

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     { pageLanguage: "en" },
//     "google_translate_element"
//   );
// }
// fetch("http://numbersapi.com/random/math")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
