function toggleMobileNav(closeOnly = false) {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    if (!closeOnly) {
      // Only add "responsive" if closeOnly is false
      x.className += " responsive";
    }
  } else {
    x.className = "topnav";
  }
}

// To close the menu upon clicking on a link
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-toggle");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggleMobileNav(true); // Pass true to only close the menu
    });
  });
});
