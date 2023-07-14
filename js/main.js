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
  let overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.style.zIndex = "99";

  if (!isOpne) {
    settingsBox.style.left = 0;
    gearBox.style.left = "240px";
    document.body.appendChild(overlay);
  } else {
    settingsBox.style.left = "-251px";
    gearBox.style.left = 0;
    document.body.removeChild(document.querySelector(".popup-overlay"));
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

// random background option

const buttons = document.querySelectorAll(
  ".settings-box .random-background  button"
);
let stat = localStorage.getItem("background-statue");
const landingPage = document.querySelector(".landing-page");

// check stat in local storge value
if (stat != null) {
  landingPage.style.backgroundImage = localStorage.getItem("background-url");

  buttons.forEach((btn) => {
    btn.classList.remove("active");

    if (stat == "true" && btn.classList.contains("yes")) {
      btn.classList.add("active");
    }
    if (stat == "false" && btn.classList.contains("no")) {
      btn.classList.add("active");
    }
  });
}

// add Event Listener for background options
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    stat = e.target.classList.contains("yes");
    localStorage.setItem("background-statue", stat);
  });
});

// bullets option

const buttonsBullets = document.querySelectorAll(
  ".settings-box .show-bullets  button"
);
const Bullets = document.querySelector(".nav-bullets");

let statBullets = localStorage.getItem("bullets-statue");

// check stat in local storge value
if (statBullets != null) {
  buttonsBullets.forEach((btn) => {
    btn.classList.remove("active");

    if (statBullets == "true" && btn.classList.contains("yes")) {
      btn.classList.add("active");
      Bullets.style.display = "block";
    }
    if (statBullets == "false" && btn.classList.contains("no")) {
      btn.classList.add("active");
      Bullets.style.display = "none";
    }
  });
}

// add Event Listener for background options
buttonsBullets.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttonsBullets.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    statBullets = e.target.classList.contains("yes");
    localStorage.setItem("bullets-statue", statBullets);
    statBullets
      ? (Bullets.style.display = "block")
      : (Bullets.style.display = "none");
  });
});

//landing page

// Get array of images
const imgsArray = [
  "./images/slide01.jpg",
  "./images/slide02.jpg",
  "./images/slide03.jpg",
  "./images/slide04.jpg",
  "./images/slide05.jpg",
];
const imgsArrayMobile = [
  "./images/slide01-mobile.jpg",
  "./images/slide02-mobile.jpg",
  "./images/slide03-mobile.jpg",
  "./images/slide04-mobile.jpg",
  "./images/slide05-mobile.jpg",
];

// Varible to control interval

// Function to set random image as background
async function setRandomImage() {
  if (stat == "true" || stat == true) {
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
    //   localStorage.setItem("background-url", `url(${img.url})`);
    //   if (!img.ok) {
    //   Set a random image from the array
    if (window.innerWidth > 768) {
      let randomNum = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = `url(${imgsArray[randomNum]})`;
      localStorage.setItem("background-url", `url(${imgsArray[randomNum]})`);
    } else {
      let randomNum = Math.floor(Math.random() * imgsArrayMobile.length);
      landingPage.style.backgroundImage = `url(${imgsArrayMobile[randomNum]})`;
      localStorage.setItem(
        "background-url",
        `url(${imgsArrayMobile[randomNum]})`
      );
    }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }
}

setRandomImage();

// Change background image url
setInterval(setRandomImage, 5000);

// change progress form 0 to it is value
const progressBars = document.querySelectorAll(
  ".skills .skill-box .skill-progress span"
);

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = `${entry.target.dataset.progress}`;
    }
  });
});

progressBars.forEach((el) => {
  observer.observe(el);
});

// let aboutUs = document.querySelector(".about-us span");
// console.log(aboutUs);

// let gearObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       gearBox.style.backgroundColor = "#333";
//     } else {
//       gearBox.style.backgroundColor = "#fff";
//     }
//   });
// });

// gearObserver.observe(aboutUs);

//create popup with the imge

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //create Overlay Element
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    document.body.appendChild(overlay);

    //create the popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    if (img.alt !== "") {
      //create heading
      let imgHeading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);

      imgHeading.appendChild(imgText);

      popupBox.appendChild(imgHeading);
    }

    //create the img
    let popupImg = document.createElement("img");
    popupImg.src = img.src;

    popupBox.appendChild(popupImg);
    document.body.appendChild(popupBox);

    //create the close span
    let closeButton = document.createElement("span");
    let closeButtonText = document.createTextNode("x");

    closeButton.appendChild(closeButtonText);

    closeButton.className = "close-button";

    popupBox.appendChild(closeButton);

    //close popup and remove overlay
    closeButton.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      document.body.removeChild(document.querySelector(".popup-overlay"));
    });
  });
});
