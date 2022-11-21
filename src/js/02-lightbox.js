import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// console.log(galleryItems);

// ------------------------------------------------

const galleryPlace = document.querySelector(`.gallery`);

const changeGalleryOfImage = galleryItems.map(galleryItem => {
  const changeItemEl = document.createElement(`a`);
  changeItemEl.href = galleryItem.original;
  changeItemEl.classList.add(`gallery__link`);

  const changeImgEl = document.createElement(`img`);
  changeImgEl.classList.add(`gallery__image`);
  changeImgEl.src = galleryItem.preview;
  changeImgEl.alt = galleryItem.description;

  changeItemEl.appendChild(changeImgEl);

  return changeItemEl;
});
galleryPlace.append(...changeGalleryOfImage);

// -----------------------------------------------

galleryPlace.addEventListener(`click`, callModalWindow);

function callModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName != 'IMG') {
    return;
  }
  // console.log(event.target.dataset.source);

  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
  });
}
