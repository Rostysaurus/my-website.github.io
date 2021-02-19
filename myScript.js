"use strict";

// Variables

const btnAbout = document.querySelector(".btn-about");
const btnEmailMe = document.querySelector(".btn-email-me");

const btnVierMyWork = document.querySelector(".btn-work");
const btnViewAllPhotos = document.querySelector(".view-all-photos");

const btnAlmumImages = document.querySelectorAll(".album");
const textOneEl = document.querySelectorAll(".image-text");
const btnAhlambra = document.querySelector(".one");
const btnAndorra = document.querySelector(".two");
const btnBerlin = document.querySelector(".three");
const btnBrittany = document.querySelector(".four");

const gitHub = document.querySelector(".fa-github");
const linkedIn = document.querySelector(".fa-linkedin-in");
const insta = document.querySelector(".fa-instagram");
const behance = document.querySelector(".fa-behance-square");

// CONTACT BUTTONTS

btnAbout.addEventListener("click", function () {
  document.location.href = "about.html";
});

btnEmailMe.addEventListener("click", function () {
  window.open("mailto:rkanibolotskyi@gmail.com");
});

// Social media icons

gitHub.addEventListener("click", function () {
  window.open("https://github.com/Rostysaurus");
  // document.location.href = "photos.html";
});

linkedIn.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/rkanibolotskyi/");
  // document.location.href = "photos.html";
});

insta.addEventListener("click", function () {
  window.open("https://www.instagram.com/rkanibolotskyi/");
  // document.location.href = "photos.html";
});

behance.addEventListener("click", function () {
  window.open("https://www.behance.net/rkanibolot9121");
  // document.location.href = "photos.html";
});

// btnVierMyWork.addEventListener("click", function () {
//   console.log("btn View clicked");
// });

// Functions

// VIEW MY WORK BUTTON

// Smooth scroll
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startingPosition = window.pageYOffset;
  var distance = targetPosition - startingPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startingPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t * t + b;
    t -= 2;
    return (-c / 2) * (t * t * t * t - 2) + b;
  }

  requestAnimationFrame(animation);
}

btnVierMyWork.addEventListener("click", function () {
  smoothScroll(".main-2", 400);
});

// ALBUMS

// Mouse Over

for (let i = 0; i < btnAlmumImages.length; i++)
  if (window.screen.width <= 400) {
    console.log("small");
    textOneEl[`${i}`].style.display = "block";
  } else {
    btnAlmumImages[i].addEventListener("mouseover", function () {
      textOneEl[`${i}`].style.display = "block";
    });
    // Mouse Out

    btnAlmumImages[i].addEventListener("mouseout", function () {
      textOneEl[`${i}`].style.display = "none";
    });
  }

//   Mouse click
for (let i = 0; i < btnAlmumImages.length; i++)
  btnAlmumImages[i].addEventListener("click", function () {
    console.log("i am clicked");
  });

//   Btn View All Photos
btnViewAllPhotos.addEventListener("click", function () {
  document.location.href = "photos.html";
});
// Individual buttons
btnAhlambra.addEventListener("click", function () {
  document.location.href = "alhambra.html";
});
btnAndorra.addEventListener("click", function () {
  document.location.href = "andorra.html";
});
btnBerlin.addEventListener("click", function () {
  document.location.href = "berlin.html";
});
btnBrittany.addEventListener("click", function () {
  document.location.href = "brittany.html";
});
