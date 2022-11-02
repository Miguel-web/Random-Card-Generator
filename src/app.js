/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/*
window.onload = () => {
  document.querySelector(".cardbase").classList.add(generateRandomSuit());
  document.querySelector(".cardbase").innerHTML = generateRandomNumber();
  if (suit === "♥" || suit === "♦") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNumber = Math.floor(Math.random() * numbers.length);
  return numbers[randomNumber];
};

let generateRandomSuit = () => {
  let suit = ["♥", "♠", "♣", "♦"];
  let randomSuit = Math.floor(Math.random() * numbers.length);
  return suit[randomSuit];
};

*/

window.onload = () => {
  let pinta = ["\u2660", "\u2663", "\u2665", "\u2666"];
  let royalty = ["A", "K", "Q", "J", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = (document.querySelector(".suit").innerHTML =
    pinta[Math.floor(Math.random() * pinta.length)]);

  document.querySelector(".suit").innerHTML = result;

  document.querySelector(".number").innerHTML =
    royalty[Math.floor(Math.random() * royalty.length)];

  document.querySelector(".suit2").innerHTML = result;

  if ((result === pinta[2]) | (result === pinta[3])) {
    document.querySelector(".suit").style.color = "red";
    document.querySelector(".suit2").style.color = "red";
  } else document.querySelector(".card").style.color = "black";
};
