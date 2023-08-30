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

lightbox.init();
