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

import img1 from "../images/recordings/1.png";
import img10 from "../images/recordings/10.jpg";
import img11 from "../images/recordings/11.jpg";
import img12 from "../images/recordings/12.jpg";
import img13 from "../images/recordings/13.jpg";
import img14 from "../images/recordings/14.jpg";
import img15 from "../images/recordings/15.jpg";
import img16 from "../images/recordings/16.jpg";
import img17 from "../images/recordings/17.jpg";
import img18 from "../images/recordings/18.jpg";
import img19 from "../images/recordings/19.jpg";
import img2 from "../images/recordings/2.png";
import img20 from "../images/recordings/20.jpg";
import img21 from "../images/recordings/21.png";
import img22 from "../images/recordings/22.jpg";
import img23 from "../images/recordings/23.jpg";
import img24 from "../images/recordings/24.jpg";
import img25 from "../images/recordings/25.jpg";
import img26 from "../images/recordings/26.jpeg";
import img27 from "../images/recordings/27.jpeg";
import img28 from "../images/recordings/28.png";
import img29 from "../images/recordings/29.jpg";
import img3 from "../images/recordings/3.png";
import img30 from "../images/recordings/30.jpg";
import img31 from "../images/recordings/31.jpg";
import img32 from "../images/recordings/32.jpg";
import img33 from "../images/recordings/33.jpg";
import img34 from "../images/recordings/34.jpg";
import img35 from "../images/recordings/35.jpg";
import img36 from "../images/recordings/36.jpeg";
import img37 from "../images/recordings/37.jpg";
import img38 from "../images/recordings/38.png";
import img39 from "../images/recordings/39.jpg";
import img4 from "../images/recordings/4.jpg";
import img40 from "../images/recordings/40.jpg";
import img41 from "../images/recordings/41.jpeg";
import img42 from "../images/recordings/42.jpg";
import img43 from "../images/recordings/43.jpg";
import img44 from "../images/recordings/44.jpg";
import img45 from "../images/recordings/45.png";
import img5 from "../images/recordings/5.jpg";
import img6 from "../images/recordings/6.jpg";
import img7 from "../images/recordings/7.jpg";
import img8 from "../images/recordings/8.jpg";
import img9 from "../images/recordings/9.jpg";

// Get a reference to the recordings container
const recordingsContainer = document.getElementById("recordings-container");

// Array of image filenames (adjust these according to your filenames)
const imageFilenames = [
  img45,
  img44,
  img43,
  img42,
  img41,
  img40,
  img39,
  img38,
  img37,
  img36,
  img35,
  img34,
  img33,
  img32,
  img31,
  img30,
  img29,
  img28,
  img27,
  img26,
  img25,
  img24,
  img23,
  img22,
  img21,
  img20,
  img19,
  img18,
  img17,
  img16,
  img15,
  img14,
  img13,
  img12,
  img11,
  img10,
  img9,
  img8,
  img7,
  img6,
  img5,
  img4,
  img3,
  img2,
  img1,
];

// Loop through the image filenames and generate <picture> elements
for (const imgPath of imageFilenames) {
  const pictureElement = document.createElement("picture");

  const sourceElement = document.createElement("source");
  sourceElement.srcset = `${imgPath}?as=webp&width=400 400w, ${imgPath}?as=webp&width=800 800w`;
  sourceElement.sizes = "(max-width: 600px) 400px, 800px";
  sourceElement.type = "image/webp";

  const imgElement = document.createElement("img");
  imgElement.src = imgPath;
  imgElement.srcset = `${imgPath}?width=400 400w, ${imgPath}?width=800 800w`;
  imgElement.sizes = "(max-width: 600px) 400px, 800px";
  imgElement.alt = `Recording ${imgPath}`;
  imgElement.className = "photo-section__img";
  imgElement.loading = "lazy";

  pictureElement.appendChild(sourceElement);
  pictureElement.appendChild(imgElement);

  recordingsContainer.appendChild(pictureElement);
}
