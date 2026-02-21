// FILE: script.js

// complete the TODO comments

// Get references to page elements
const button = document.getElementById("makeSmoothie");
const outputDiv = document.getElementById("output");

// Helper function to display messages on the page
function showMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
}

// Helper function that returns a Promise that resolves after a delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   PART 1 — PROMISE FUNCTIONS
========================= */

// Step 1: Get ingredients
function getIngredients() {
  // TODO:
  // 1. Show message: "Gathering ingredients..."
  // 2. Wait 2 seconds using wait()
  // 3. Resolve with "Ingredients ready"

  return new Promise((resolve, reject) => {
    showMessage("Gathering ingredients...");
    wait(2000)
      .then(() =>
        resolve("Ingredients ready"));
    }
  )
}


// Step 2: Blend smoothie
function blendSmoothie() {
  // TODO:
  // 1. Show message: "Blending smoothie..."
  // 2. Wait 3 seconds
  // 3. Sometimes FAIL (see assignment instructions)
  // 4. Otherwise resolve with "Smoothie blended"

  return new Promise((resolve, reject) => {
    // 30% chance of failure
    success = true;
    value = Math.random()*10;
    //showMessage(value);
    if (value > 2) {
      success = true;
    }
    else {
      success = false;
    }
    // do the stuff in TODO
    if (success) {
      showMessage("Blending smoothie...");
      wait(3000)
        .then(() =>
          resolve("Smoothie blended"));
    }
    else {
      showMessage("Blending smoothie...");
      wait(3000)
        .then(() =>
          reject("ERROR: Blender broke!"));
    }
  });
}

// Step 3: Pour smoothie
function pourSmoothie() {
  // TODO:
  // 1. Show message: "Pouring into cup..."
  // 2. Wait 1 second
  // 3. Resolve with "Smoothie is ready!"

  return new Promise((resolve, reject) => {
    showMessage("Pouring into cup...");
    wait(1000)
      .then(() =>
        resolve("Smoothie is ready!"));
    }
  )
}


/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO: Chain the steps in order using .then()
  getIngredients()
    .then((result) => 
      showMessage(result))
    .then(() => 
      blendSmoothie())
    .then((result) =>
      showMessage(result))
      .then(() => 
          pourSmoothie())
      .then((result) =>
        showMessage(result))
    .catch((reject) => 
      showMessage(reject))
}

/* =========================
   PART 3 — ASYNC/AWAIT VERSION
========================= */

async function makeSmoothieAsync() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO:
  // Use try/catch
  // await getIngredients()
  // await blendSmoothie()
  // await pourSmoothie()
  // Show final success message
  try {
    text = await getIngredients();
    showMessage(text);
    text = await blendSmoothie();
    showMessage(text);
    text = await pourSmoothie();
    showMessage(text);
/*  
    response = await fetch(getIngredients());
    text = await response.text();
    showMessage(text);
    wait(2000);
    response = await fetch(blendSmoothie());
    text = await response.text();
    showMessage(text);
    wait(2000);
    response = await fetch(pourSmoothie());
    text = await response.text();
    showMessage(text);
    wait(2000);
 */
  }
  // Catch and display any errors
  catch (reject) {
    showMessage(reject);
  }

}

//makeSmoothieAsync();
//makeSmoothieWithPromises();