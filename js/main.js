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
    handleActive(e);
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
    } else if (stat == "false" && btn.classList.contains("no")) {
      btn.classList.add("active");
    }
  });
} else {
  stat = true;
  localStorage.setItem("background-statue", stat);
}

// add Event Listener for background options
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleActive(e);
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
    } else if (statBullets == "false" && btn.classList.contains("no")) {
      btn.classList.add("active");
      Bullets.style.display = "none";
    }
  });
}

// add Event Listener for bullets options
buttonsBullets.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleActive(e);

    statBullets = e.target.classList.contains("yes");
    localStorage.setItem("bullets-statue", statBullets);
    statBullets
      ? (Bullets.style.display = "block")
      : (Bullets.style.display = "none");
  });
});

//fixed header option
let header = document.querySelector(".landing-page .container-h");

const buttonsHeader = document.querySelectorAll(
  ".settings-box .fixed-header  button"
);

let statHeader = localStorage.getItem("header-statue");

// check stat in local storge value
if (statHeader != null) {
  buttonsHeader.forEach((btn) => {
    btn.classList.remove("active");

    if (statHeader == "true" && btn.classList.contains("yes")) {
      btn.classList.add("active");
      header.style.position = "fixed";
    } else if (statHeader == "false" && btn.classList.contains("no")) {
      btn.classList.add("active");
      header.style.position = "relative";
    }
  });
}

// add Event Listener for fixed header options
buttonsHeader.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleActive(e);

    statHeader = e.target.classList.contains("yes");
    localStorage.setItem("header-statue", statHeader);
    statHeader
      ? (header.style.position = "fixed")
      : (header.style.position = "relative");
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

// change header background color
let skills = document.querySelector(".skills");

let skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.style.backgroundColor = "rgb(0,0,0,.7)";
      localStorage.setItem("header-backfround-color", "rgb(0,0,0,.7)");
    }
  });
});
skillsObserver.observe(skills);

let intro = document.querySelector(".intro");

let introObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.style.backgroundColor = "transparent";
      localStorage.setItem("header-backfround-color", "transparent");
    }
  });
});

introObserver.observe(intro);

let headerColor = localStorage.getItem("header-backfround-color");

if (!headerColor == null) {
  header.style.backgroundColor = headerColor;
}

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

// Handle Active state
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });

  ev.target.classList.add("active");
}

//Reset Button

document.querySelector(".reset-options").onclick = function () {
  localStorage.removeItem("color_option");
  localStorage.removeItem("background-url");
  localStorage.removeItem("bullets-statue");
  localStorage.removeItem("background-statue");
  window.location.reload();
};

//Toggle Menu

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
let isMenuOpen = false;

menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  menuButton.classList.toggle("open");
  menu.classList.toggle("open");
  isMenuOpen = !isMenuOpen;
});

document.body.addEventListener("click", (e) => {
  //close menu if you clicked outside it
  if (
    isMenuOpen &&
    !e.target.parentElement.classList.contains("menu") &&
    !e.target.parentElement.classList.contains("links-container")
  ) {
    console.log(e.target.parentElement);
    menuButton.classList.toggle("open");
    menu.classList.toggle("open");
    isMenuOpen = !isMenuOpen;
  }
  //close setting box  if you clicked outside it

  if (isOpne && e.target.classList.contains("popup-overlay")) {
    settingsBox.style.left = "-251px";
    gearBox.style.left = 0;
    document.body.removeChild(document.querySelector(".popup-overlay"));
    document.querySelector(".gear").classList.toggle("fa-spin");

    isOpne = !isOpne;
  }
});
