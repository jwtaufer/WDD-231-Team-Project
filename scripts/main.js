import "./hamburger.mjs";
import "./modal.mjs";
import "./list.mjs";

const task = document.querySelector("#q1-1");
const dropDown = document.querySelector("#q1-1 > .drop-down");

window.addEventListener("click", function(e) {
    e.preventDefault();
    dropDown.classList.toggle("closed");
});