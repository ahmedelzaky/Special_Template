//check if there is color in local storage
const colorsList = document.querySelectorAll(".colors-list li");

let mainColor = localStorage.getItem("color_option");

if (mainColor != null) {
  document.documentElement.style.setProperty("--main-color", `${mainColor}`);

  // active the main color icon
  colorsList.forEach((e) => {
    e.classList.remove("active");

    if (e.dataset.color == mainColor) {
      e.classList.add("active");
    }
  });
}

//Settings
const settingsBox = document.querySelector(".settings-box");
const gearBox = document.querySelector(".gear-box");
let isOpne = false;

//show and hide settings menu
gearBox.addEventListener("click", (e) => {
  if (!isOpne) {
    settingsBox.style.left = 0;
    gearBox.style.left = "200px";
  } else {
    settingsBox.style.left = "-251px";
    gearBox.style.left = 0;
  }
  //toggle open statue
  isOpne = !isOpne;

  document.querySelector(".gear").classList.toggle("fa-spin");
});

//switch colors
colorsList.forEach((li) => {
  li.addEventListener("click", (e) => {
    colorsList.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    //set main color
    document.documentElement.style.setProperty(
      "--main-color",
      `${e.target.dataset.color}`
    );
    localStorage.setItem("color_option", `${e.target.dataset.color}`);
  });
});

//landing page

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
