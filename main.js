// Functionize Minecraft Fishing Start Code

// Variables
let resultImg = document.getElementById("result-img");
let codCount = document.getElementById("num-cod");
let salmonCount = document.getElementById("num-salmon");
let tropicalCount = document.getElementById("num-tropical");
let pufferCount = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let invCod = document.getElementById("inventoryCod");
let invPuffer = document.getElementById("inventoryPuffer");
let invTropical = document.getElementById("inventoryTropical");
let invSalmon = document.getElementById("inventorySalmon");
let sortBTn = document.getElementById("sort");


// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishOnce);
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
sortBTn.addEventListener("click", sort);

// Count Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

let character = "steve";
steveImgEl.classList.add("green");

function selectSteve() {
  steveImgEl.classList.add("green");
  alexImgEl.classList.remove("green");
  villagerImgEl.classList.remove("green");

  character = "steve";
}

function selectAlex() {
  steveImgEl.classList.remove("green");
  alexImgEl.classList.add("green");
  villagerImgEl.classList.remove("green");

  character = "alex";
}

function selectVillager() {
  steveImgEl.classList.remove("green");
  alexImgEl.classList.remove("green");
  villagerImgEl.classList.add("green");

  character = "villager";
}

invCod = 0;
invSalmon = 0;
invPuffer = 0;
invTropical = 0;

function fishOnce() {

  // Fish by Input
  let input = document.getElementById("input");
  input = input.value;
  let fish = 0;

  for (fish; fish < input; fish++) {
    console.log(fish);
    console.log(input);

    // Determine Selected Character

  if (character == "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      while ( invCod < numCod) {
        invCod++;
        inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      while ( invSalmon < numSalmon) {
        invSalmon++;
        inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      while ( invTropical < numTropical) {
        invTropical++;
        inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
      }
     
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      while ( invPuffer < numPuffer) {
        invPuffer++;
        inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
      }
    }
  } else if (character == "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      while ( invCod < numCod) {
        invCod++;
        inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      while ( invSalmon < numSalmon) {
        invSalmon++;
        inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      while ( invTropical < numTropical) {
        invTropical++;
        inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
      }
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      while ( invPuffer < numPuffer) {
        invPuffer++;
        inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
      }
    }
  } else if (character == "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      while ( invCod < numCod) {
        invCod++;
        inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      while ( invSalmon < numSalmon) {
        invSalmon++;
        inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      while ( invTropical < numTropical) {
        invTropical++;
        inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
      }
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      while ( invPuffer < numPuffer) {
        invPuffer++;
        inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
      }
    }
  }
  }
}

fish = 0;

function plus5() {
  for (let n = 1; n <= 5; n++) {
   // Determine Selected Character

  if (character == "steve") {
    // Steve Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      while ( invCod < numCod) {
        invCod++;
        inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      while ( invSalmon < numSalmon) {
        invSalmon++;
        inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      while ( invTropical < numTropical) {
        invTropical++;
        inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
      }
     
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      while ( invPuffer < numPuffer) {
        invPuffer++;
        inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
      }
    }
  } else if (character == "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      while ( invCod < numCod) {
        invCod++;
        inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      while ( invSalmon < numSalmon) {
        invSalmon++;
        inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      while ( invTropical < numTropical) {
        invTropical++;
        inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
      }
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      while ( invPuffer < numPuffer) {
        invPuffer++;
        inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
      }
    }
  } else if (character == "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      codCount.innerHTML = numCod;
      while ( invCod < numCod) {
        invCod++;
        inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      salmonCount.innerHTML = numSalmon;
      while ( invSalmon < numSalmon) {
        invSalmon++;
        inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
      }
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      tropicalCount.innerHTML = numTropical;
      while ( invTropical < numTropical) {
        invTropical++;
        inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
      }
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      pufferCount.innerHTML = numPuffer;
      while ( invPuffer < numPuffer) {
        invPuffer++;
        inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
      }
    }
  }
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishOnce();
    count++;
  }
  console.log(count);
}

function sort() {
  inventory.innerHTML = "";

  invCod = 0;
  invSalmon = 0;
  invPuffer = 0;
  invTropical = 0;

  for (numCod; numCod > invCod; invCod++) {
    inventory.innerHTML += `<img id="inventoryCod" src="img/Raw-Cod.png" class="inventoryFish">`;
  }
  for (numSalmon; numSalmon > invSalmon; invSalmon++) {
    inventory.innerHTML += `<img id="inventorySalmon" src="img/Raw-Salmon.png" class="inventoryFish">`;
  }
  for (numPuffer; numPuffer > invPuffer; invPuffer++) {
    inventory.innerHTML += `<img id="inventoryPuffer" src="img/Pufferfish.png" class="inventoryFish">`;
  }
  for (numTropical; numTropical > invTropical; invTropical++) {
    inventory.innerHTML += `<img id="inventoryTropical" src="img/Tropical-Fish.png" class="inventoryFish">`;
  }
}