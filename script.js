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
    const success = true;
    if (success) {
      showMessage("Gathering ingredients...");
      wait(2000);
      resolve("Ingredients ready");
    }
    else {
      reject("Something went wrong");
    }
  });
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
    value = Math.random(10);
    if (value > 2) {
      success = true;
    }
    else {
      success = false;
    }
    // do the stuff in TODO
    if (success) {
      showMessage("Blending smoothie...");
      wait(3000);
      resolve("Smoothie blended");
    }
    else {
      reject("ERROR: Blender broke!");
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
    const success = true;
    if (success) {
      showMessage("Pouring into cup...");
      wait(1000);
      resolve("Smoothie is ready!");
    }
    else {
      reject("Something went wrong");
    }
  });
}

/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  // TODO: Chain the steps in order using .then()
  getIngredients()
     .then(blendSmoothie())
     .then(pourSmoothie())
     //.then(...)
     .catch(error => console.error(error))
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
    await getIngredients();
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

makeSmoothieAsync();
//makeSmoothieWithPromises();