var navBar = document.getElementsByClassName("nav-bar")[0];
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navBar.style.opacity = "0";
  } else if (currentScroll == 0) {
    navBar.style.background = "";
    navBar.style.opacity = "1";
  } else {
    navBar.style.opacity = "1";
    navBar.style.background = "#333333";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
