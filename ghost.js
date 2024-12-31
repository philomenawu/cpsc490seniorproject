const element = document.querySelector("div#canvas-container4");
const output = document.querySelector("p#output");

element.addEventListener("scrollend", (event) => {
  output.textContent = "scrollend event fired!";
});