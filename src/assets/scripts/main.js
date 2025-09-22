/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import PhotoSwipeLightbox from "../../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.js";
import PhotoSwipe from "../../../node_modules/photoswipe/dist/photoswipe.esm.js";

/**
 * Write any other JavaScript below
 */

// PhotoSwipe
const lightbox = new PhotoSwipeLightbox({
  gallery: "#photos",
  children: "a",
  pswpModule: PhotoSwipe,
});

// Custom caption
lightbox.on("uiRegister", () => {
  lightbox.pswp.ui.registerElement({
    name: "custom-caption",
    order: 9,
    isButton: false,
    appendTo: "root",
    html: "",
    onInit: (el) => {
      lightbox.pswp.on("change", () => {
        const currSlideEl = lightbox.pswp.currSlide.data.element;
        let captionHTML = "";
        if (currSlideEl) {
          const hiddenCaption = currSlideEl.querySelector(".hidden-caption-content");
          captionHTML = hiddenCaption ? hiddenCaption.innerHTML : currSlideEl.querySelector("img").alt;
        }
        el.innerHTML = captionHTML;
      });
    },
  });
});

lightbox.init();

// Language option - Biography
document.addEventListener("DOMContentLoaded", function () {
  const langMenuItems = document.querySelectorAll(".lang-menu__item");
  const contentBlocks = document.querySelectorAll(".biography");

  langMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedLang = this.getAttribute("data-lang");

      contentBlocks.forEach((block) => {
        block.classList.remove("visible");
        if (block.classList.contains(`bio-${selectedLang}`)) {
          block.classList.add("visible");
        }
      });
    });
  });
});

// Toggle Nav Bar
function toggleMobileNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Back to the top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Function for "Back to Top" button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
