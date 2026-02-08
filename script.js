const text = document.getElementById("slideText");
const btnBox = document.getElementById("btnBox");

const slides = [
  "Okay… ek honest baat bolni thi 🙂",
  "Main perfect nahi hoon, par genuinely try kar raha hoon.",
  "Kal thoda zyada ho gaya, maanta hoon.",
  "Ab sawaal simple hai 👇",
  "Kya mujhe maaf kiya ja sakta hai?"
];

let i = 0;

function showSlides() {
  if (i < slides.length) {
    text.innerHTML = slides[i];
    i++;
    setTimeout(showSlides, 1500);
  }
}

showSlides();

/* BUTTON LOGIC */

function yesClick() {
  text.innerHTML = "Thank you 🙂<br>Iska matlab hai, we’re okay enough to move forward.";
  btnBox.innerHTML = "";
}

function noClick() {
  text.innerHTML =
    "Ouch 😅<br>Fair hai. Thoda drama main deserve karta hoon.<br><br>But ek baat toh banti hai…";
  btnBox.innerHTML =
    `<button class="yes" onclick="yesClick()">Okay, thoda sa maaf 🤍</button>`;
}

/* MUSIC */
const btn = document.getElementById("playBtn");
const music = document.getElementById("bgm");

btn.addEventListener("click", () => {
  music.play();
  btn.innerText = "♪ playing";
});
