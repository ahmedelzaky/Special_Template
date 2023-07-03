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
function setRandomImage() {
  // try {
  //   // Make a GET request to the Lorem Picsum API
  //   //i am stopping the request because it use a lot of data
  //   let response = await fetch("https://picsum.ph5otos/1920/1080");

  //   // The response URL will contain a random image
  //   let imageUrl = response.url;

  //   landingPage.style.backgroundImage = `url(${imageUrl})`;
  // } catch (error) {
  //   console.error(error);

  // Set a random image from the array
  let randomNum = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage = `url(${imgsArray[randomNum]})`;
  // }
}

setRandomImage();

// Change background image url
setInterval(setRandomImage, 10000);
