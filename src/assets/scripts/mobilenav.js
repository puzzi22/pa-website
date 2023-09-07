function toggleMobileNav(closeOnly = false) {
  const x = document.getElementById("myTopnav");
  if (closeOnly) {
    x.classList.remove("responsive");
    return;
  }
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}

document.querySelectorAll(".topnav__link").forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMobileNav(true);
  });
});
