import Landing from "./landing"
import Menu from "./menu"
import Contact from "./contact"

console.log("hello bob")

const homeBtn = document.getElementById("home-button");
homeBtn.addEventListener("click", () => Landing());

const menuBtn = document.getElementById("menu-button");
menuBtn.addEventListener("click", () => Menu());

const contactBtn = document.getElementById("contact-button");
contactBtn.addEventListener("click", () => Contact());

Landing();