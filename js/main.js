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

  try {
    if (window.innerWidth > 768) {
      let img = await fetch("https://picsum.photos/1920/1080");
      landingPage.style.backgroundImage = `url(${img.url})`;
    } else {
      let img = await fetch("https://picsum.photos/1080/1920");
      landingPage.style.backgroundImage = `url(${img.url})`;
    }
  } catch (error) {
    //   Set a random image from the array
    let randomNum = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = `url(${imgsArray[randomNum]})`;
  }
}

setRandomImage();

// Change background image url
setInterval(setRandomImage, 10000);
