function toggleMobileNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// To close the menu upon clicking on a link
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-toggle");
  navLinks.forEach(function (link) {
    link.addEventListener("click", toggleMobileNav);
  });
});
