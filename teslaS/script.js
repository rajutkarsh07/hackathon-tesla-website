"use strict";

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");

const sectionhead = document.querySelector(".section-head");
const sectionpara = document.querySelector(".section-para");

btn1.addEventListener("click", () => {
  sectionhead.textContent = "Cinematic Experience";
  sectionpara.textContent =
    "A 17” touchscreen offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more. ";
});

btn2.addEventListener("click", () => {
  sectionhead.textContent = "Yoke Steering ";
  sectionpara.textContent =
    "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.  ";
});

btn3.addEventListener("click", () => {
  sectionhead.textContent = "Perfect Environment ";
  sectionpara.textContent =
    "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment. ";
});

btn4.addEventListener("click", () => {
  sectionhead.textContent = "Redesigned Second Row ";
  sectionpara.textContent =
    "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging. ";
});

btn5.addEventListener("click", () => {
  sectionhead.textContent = "Console-Grade Gaming";
  sectionpara.textContent =
    "Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility. ";
});

const sevenone = document.querySelector(".seven-div-one");
const seventwo = document.querySelector(".seven-div-two");

sevenone.addEventListener("click", () => {
  sevenone.classList.add("seven-active");
  seventwo.classList.remove("seven-active");
  console.log("one");
});

seventwo.addEventListener("click", () => {
  seventwo.classList.add("seven-active");
  seventwo.classList.add("seven-active");
  console.log("two");
  sevenone.classList.remove("seven-active");
});

const models = document.getElementById("models");
const splaidfe = document.getElementById("splaidfe");

const range = document.querySelector(".range");
const weight = document.querySelector(".weight");
const power = document.querySelector(".power");
const charging = document.querySelector(".charging");

models.addEventListener("click", () => {
  range.textContent = "405 mi";
  weight.textContent = "4,561 lbs";
  power.textContent = "670 hp";
  charging.textContent = "250 kW";
  models.classList.add("specs-btn-active");
  splaidfe.classList.remove("specs-btn-active");
});

splaidfe.addEventListener("click", () => {
  range.textContent = "396 mi";
  weight.textContent = "4,766 lbs";
  power.textContent = "1,020 hp";
  charging.textContent = "250 kW";
  splaidfe.classList.add("specs-btn-active");
  models.classList.remove("specs-btn-active");
});
