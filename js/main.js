//Settings

let settingsBox = document.querySelector(".settings-box");
let gearBox = document.querySelector(".gear-box");
let isOpne = false;

//show and hide settings menu
gearBox.addEventListener("click", (e) => {
  let gear = document.querySelector(".gear");
  if (!isOpne) {
    settingsBox.style.left = 0;
    gearBox.style.left = "200px";
  } else {
    settingsBox.style.left = "-251px";
    gearBox.style.left = 0;
  }
  //toggle open statue
  isOpne = !isOpne;

  gear.classList.toggle("fa-spin");
});

const landingPage = document.querySelector(".landing-page");

// Get array of images
let imgsArray = [
  "./images/slide01.jpg",
  "./images/slide02.jpg",
  "./images/slide03.jpg",
  "./images/slide04.jpg",
  "./images/slide05.jpg",
];

// Function to set random image as background
async function setRandomImage() {
  // Set a random image from the picsum

  // try {
  //   let img;
  //   if (window.innerWidth > 768) {
  //     img = await fetch("https://picsum.photos/1920/1080");
  //     landingPage.style.backgroundImage = `url(${img.url})`;
  //   } else {
  //     img = await fetch("https://picsum.photos/1080/1920");
  //     landingPage.style.backgroundImage = `url(${img.url})`;
  //   }
  //   if (!img.ok) {
  //   Set a random image from the array
  let randomNum = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage = `url(${imgsArray[randomNum]})`;
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
}

setRandomImage();

// Change background image url
setInterval(setRandomImage, 10000);
