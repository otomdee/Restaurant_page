import burgerImg from "./burger.jpg";
//populate menu page fxn


export function populateMenu() {
    //card 1
    const contentDiv = document.querySelector("#content");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const burgerImage = document.createElement("img");
    const cardtext1 = document.createElement("div");
    const span1card1 = document.createElement("span");
    const span2card1 = document.createElement("span");
    const button1 = document.createElement("button");

    span1card1.innerHTML = "Try our special";
    span2card1.innerHTML = 'The Cheese Burger is a favourite among our customers. The reason? We use original and fresh American cheese along with our special sauce, which gives the burger a more flavourful and traditional taste.'

    span2card1.classList.add("cardtextSmall");
    span1card1.classList.add("cardtextLarge");
    cardtext1.classList.add("cardtext");
    burgerImage.src = burgerImg;
    burgerImage.alt = "burger image";
    button1.innerHTML = "ORDER";

    cardtext1.append(span1card1);
    cardtext1.append(span2card1);
    cardtext1.append(button1);
    div1.append(burgerImage);
    div1.append(cardtext1);

    contentDiv.append(div1);
    //card2
}