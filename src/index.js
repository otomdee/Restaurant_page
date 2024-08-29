import "./styles.css";
import { populateMenu } from "./menu.js";

document.querySelector("#menuButton").addEventListener("click", () => {
    populateMenu();
    console.log("clicked menu")
})