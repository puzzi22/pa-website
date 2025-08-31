import img1 from "../images/recordings/1.webp";
import img10 from "../images/recordings/10.webp";
import img11 from "../images/recordings/11.webp";
import img12 from "../images/recordings/12.webp";
import img13 from "../images/recordings/13.webp";
import img14 from "../images/recordings/14.webp";
import img15 from "../images/recordings/15.webp";
import img16 from "../images/recordings/16.webp";
import img17 from "../images/recordings/17.webp";
import img18 from "../images/recordings/18.webp";
import img19 from "../images/recordings/19.webp";
import img2 from "../images/recordings/2.webp";
import img20 from "../images/recordings/20.webp";
import img21 from "../images/recordings/21.webp";
import img22 from "../images/recordings/22.webp";
import img23 from "../images/recordings/23.webp";
import img24 from "../images/recordings/24.webp";
import img25 from "../images/recordings/25.webp";
import img26 from "../images/recordings/26.webp";
import img27 from "../images/recordings/27.webp";
import img28 from "../images/recordings/28.webp";
import img29 from "../images/recordings/29.webp";
import img3 from "../images/recordings/3.webp";
import img30 from "../images/recordings/30.webp";
import img31 from "../images/recordings/31.webp";
import img32 from "../images/recordings/32.webp";
import img33 from "../images/recordings/33.webp";
import img34 from "../images/recordings/34.webp";
import img35 from "../images/recordings/35.webp";
import img36 from "../images/recordings/36.webp";
import img37 from "../images/recordings/37.webp";
import img38 from "../images/recordings/38.webp";
import img39 from "../images/recordings/39.webp";
import img4 from "../images/recordings/4.webp";
import img40 from "../images/recordings/40.webp";
import img41 from "../images/recordings/41.webp";
import img42 from "../images/recordings/42.webp";
import img43 from "../images/recordings/43.webp";
import img44 from "../images/recordings/44.webp";
import img45 from "../images/recordings/45.webp";
import img46 from "../images/recordings/46.webp";
import img47 from "../images/recordings/47.webp";
import img48 from "../images/recordings/48.webp";
import img49 from "../images/recordings/49.webp";
import img5 from "../images/recordings/5.webp";
import img50 from "../images/recordings/50.webp";
import img51 from "../images/recordings/51.webp";
import img52 from "../images/recordings/52.webp";
import img53 from "../images/recordings/53.webp";
import img6 from "../images/recordings/6.webp";
import img7 from "../images/recordings/7.webp";
import img8 from "../images/recordings/8.webp";
import img9 from "../images/recordings/9.webp";

// Get a reference to the recordings container
const recordingsContainer = document.getElementById("recordings-container");

// Array of image filenames (adjust these according to your filenames)
const imageFilenames = [
  img53,
  img52,
  img51,
  img50,
  img49,
  img48,
  img47,
  img46,
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

for (const imgPath of imageFilenames) {
  const pictureElement = document.createElement("picture");

  // Remove the origin part of the URL
  const cleanImgPath = imgPath.replace("http://localhost:8123/", "");

  // Generate the source set for WebP
  const webpSrcSet = `${cleanImgPath} 400w, ${cleanImgPath} 800w`;

  // Generate the source set for the original format
  const imgSrcSet = `${cleanImgPath} 400w, ${cleanImgPath} 800w`;

  const sourceElement = document.createElement("source");
  sourceElement.srcset = webpSrcSet;
  sourceElement.sizes = "(max-width: 600px) 400px, 800px";
  sourceElement.type = "image/webp";

  const imgElement = document.createElement("img");
  imgElement.src = cleanImgPath; // Substitute with the appropriate path if needed
  imgElement.srcset = imgSrcSet;
  imgElement.sizes = "(max-width: 600px) 400px, 800px";
  imgElement.alt = `Recording`; // Substitute with a dynamic description if needed
  imgElement.className = "recording-section__img"; // Adjust the class name as needed
  imgElement.loading = "lazy";

  pictureElement.appendChild(sourceElement);
  pictureElement.appendChild(imgElement);

  recordingsContainer.appendChild(pictureElement);
}
