import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPlace = document.querySelector(`.gallery`);

console.log(galleryItems);

const changeGalleryOfImage = galleryItems.map((galleryItem) => {
  const changeItemEl = document.createElement(`a`);
  changeItemEl.href = galleryItem.original;
  changeItemEl.classList.add(`gallery__link`);

  const changeImgEl = document.createElement(`img`);
  changeImgEl.classList.add(`gallery__image`);
  changeImgEl.src = galleryItem.preview;
  changeImgEl.alt = galleryItem.description;
  changeImgEl.dataset.source = galleryItem.original;

  changeItemEl.appendChild(changeImgEl);

  return changeItemEl;
});

galleryPlace.append(...changeGalleryOfImage);
