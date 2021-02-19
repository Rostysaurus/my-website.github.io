"use strict";

// Variables
const allAlbumLinks = [
  "alhambra.html",
  "andorra.html",
  "berlin.html",
  "brittany.html",
];

const btnAbout = document.querySelector(".btn-about");
const btnEmailMe = document.querySelector(".btn-email-me");

const btnViewAllPhotos = document.querySelector(".view-all-photos");
const btnAlmumImages = document.querySelectorAll(".album");
const textOneEl = document.querySelectorAll(".image-text");
const btnIndImage = document.querySelectorAll(".image");
const wrapper = document.querySelector(".wrapper");
const fullImage = document.querySelector(".full-img");
const closeImage = document.querySelector(".close-image");
const leftSlide = document.querySelector(".left");
const rightSlide = document.querySelector(".right");

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

// SOCIAL MEDIA ICONS//

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

let indexImage = 0;
const imageNumber = btnIndImage.length;

// ALBUMS
// Mouse Over

for (let i = 0; i < btnAlmumImages.length; i++)
  btnAlmumImages[i].addEventListener("mouseover", function () {
    textOneEl[`${i}`].style.display = "block";
  });

// Mouse Out
for (let i = 0; i < btnAlmumImages.length; i++)
  btnAlmumImages[i].addEventListener("mouseout", function () {
    textOneEl[`${i}`].style.display = "none";
  });

//   Mouse click
for (let i = 0; i < btnAlmumImages.length; i++)
  btnAlmumImages[i].addEventListener("click", function () {
    document.location.href = allAlbumLinks[`${i}`];
  });

//   Btn View All Photos
btnViewAllPhotos.addEventListener("click", function () {
  document.location.href = "photos.html";
});

// INDIVIDUAL IMAGES

//Open Modal//
for (let i = 0; i < btnIndImage.length; i++)
  btnIndImage[i].addEventListener("click", function () {
    indexImage = i;
    wrapper.classList.add("open");
    fullImage.classList.add("open");
    //Dynamic image change//
    fullImage.src = `assets/alhambra/photos/${i}.jpg`;
    indexImage = i;
  });

// MOBILE SWIPE

// var element = document.getElementById("pictures");
// window.mySwipe = new Swipe(element, {
//   startSlide: 0,
//   auto: 3000,
//   draggable: false,
//   autoRestart: false,
//   continuous: true,
//   disableScroll: true,
//   stopPropagation: true,
//   callback: function (index, element) {},
//   transitionEnd: function (index, element) {},
// });

document.addEventListener("keydown", function (e) {
  if (
    e.key === "ArrowRight" &&
    wrapper.classList.contains("open") &&
    fullImage.classList.contains("open")
  ) {
    var nextImage = indexImage + 1;
    fullImage.src = `assets/alhambra/photos/${[nextImage]}.jpg`;
    indexImage = nextImage;
    if (indexImage >= imageNumber) {
      indexImage = 0;
      fullImage.src = `assets/alhambra/photos/${[indexImage]}.jpg`;
    }
  } else if (
    e.key === "ArrowLeft" &&
    wrapper.classList.contains("open") &&
    fullImage.classList.contains("open")
  ) {
    var nextImage = indexImage - 1;
    fullImage.src = `assets/alhambra/photos/${[nextImage]}.jpg`;
    indexImage = nextImage;
    if (indexImage <= 0) {
      indexImage = imageNumber - 1;
      fullImage.src = `assets/alhambra/photos/${[indexImage]}.jpg`;
    }
  }
});

// Left and Right Slide Click

// Right//
rightSlide.addEventListener("click", function () {
  if (
    wrapper.classList.contains("open") &&
    fullImage.classList.contains("open")
  ) {
    var nextImage = indexImage + 1;
    fullImage.src = `assets/alhambra/photos/${[nextImage]}.jpg`;
    indexImage = nextImage;
    if (indexImage >= imageNumber) {
      indexImage = 0;
      fullImage.src = `assets/alhambra/photos/${[indexImage]}.jpg`;
    }
  }
});
// Left//

leftSlide.addEventListener("click", function () {
  if (
    wrapper.classList.contains("open") &&
    fullImage.classList.contains("open")
  ) {
    var nextImage = indexImage - 1;
    fullImage.src = `assets/alhambra/photos/${[nextImage]}.jpg`;
    indexImage = nextImage;
    if (indexImage <= 0) {
      indexImage = imageNumber - 1;
      fullImage.src = `assets/alhambra/photos/${[indexImage]}.jpg`;
    }
  }
});

// //Close Modal//

wrapper.addEventListener("click", function (e) {
  if (e.target.classList.contains("wrapper")) {
    wrapper.classList.remove("open");
    fullImage.classList.remove("open");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    wrapper.classList.remove("open");
    fullImage.classList.remove("open");
  }
});
