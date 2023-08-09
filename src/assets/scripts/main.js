/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

document.addEventListener("DOMContentLoaded", function () {
  const langMenuItems = document.querySelectorAll(".lang-menu__item");
  const contentBlocks = document.querySelectorAll(".content-block");

  langMenuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

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
