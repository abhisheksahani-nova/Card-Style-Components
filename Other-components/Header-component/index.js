const navbar = document.getElementById("navbar");
const navbarContainer1 = document.getElementById("navbar-container1");
const hideHeading = document.getElementById("hide-heading");
const navbarContainer2 = document.getElementById("navbar-container2");
const hideIcon1 = document.getElementById("hide-icon1");
const hideIcon2 = document.getElementById("hide-icon2");
const body = document.getElementsByTagName("body")[0];
const mainContainer = document.getElementById("main-container");

mainContainer.addEventListener("scroll", () => {
  if (mainContainer.scrollTop === 0) {
    navbar.classList.remove("nav-bar-short");
    navbarContainer1.classList.remove("short-navBar-innerContainer1");
    hideHeading.classList.remove("hide");
    navbarContainer2.classList.remove("short-navBar-innerContainer2");
    hideIcon1.classList.remove("hide");
    hideIcon2.classList.remove("hide");
  } else {
    navbar.classList.add("nav-bar-short");
    navbarContainer1.classList.add("short-navBar-innerContainer1");
    hideHeading.classList.add("hide");
    navbarContainer2.classList.add("short-navBar-innerContainer2");
    hideIcon1.classList.add("hide");
    hideIcon2.classList.add("hide");
  }
});
