// Functionize Minecraft Fishing Start Code

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

// Variables
let resultImg = document.getElementById("result-img");
let codCount = document.getElementById("num-cod");
let salmonCount = document.getElementById("num-salmon");
let tropicalCount = document.getElementById("num-tropical");
let pufferCount = document.getElementById("num-puffer");

// Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character == "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      console.log("Cod");
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      console.log("Salmon");
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      console.log("Tropical");
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      console.log("Puffer");
    }
  } else if (character == "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      console.log("Cod");
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      console.log("Salmon");
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      console.log("Tropical");
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      console.log("Puffer");
    }
  } else if (character == "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      console.log("Cod");
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      console.log("Salmon");
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      console.log("Tropical");
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      console.log("Puffer");
    }
  }
}
