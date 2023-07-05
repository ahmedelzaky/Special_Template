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

let settingsBoxg = document.querySelector(".settings-box");
let gear = document.querySelector(".gear");
let isOpne = false;

gear.addEventListener("click", (e) => {
  if (!isOpne) {
    settingsBoxg.style.left = 0;
    gear.style.left = "200px";
  } else {
    settingsBoxg.style.left = "-251px";
    gear.style.left = 0;
  }
  isOpne = !isOpne;
});
