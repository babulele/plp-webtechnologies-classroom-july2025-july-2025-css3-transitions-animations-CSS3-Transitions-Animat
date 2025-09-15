
// Part 2: Functions & Scope

// Global variable
let globalVar = "I am global";

// Function demonstrating local vs global scope
function scopeExample() {
  let localVar = "I am local";
  return `Global: ${globalVar} | Local: ${localVar}`;
}

// Function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Display results on page load
document.getElementById("scope-demo").innerText = scopeExample();
document.getElementById("calc-result").innerText = 
  "Area of 5x10 box = " + calculateArea(5, 10);


// Part 3: Trigger CSS Animations
function triggerBoxAnimation() {
  const box = document.querySelector(".js-box");
  box.classList.toggle("animate"); // toggles animation on/off
}
