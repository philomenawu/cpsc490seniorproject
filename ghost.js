const element = document.querySelector("div#canvas-container4");
const output = document.querySelector("button#output");

element.addEventListener("scrollend", (event) => {
  output.style.visibility = "visible";
});