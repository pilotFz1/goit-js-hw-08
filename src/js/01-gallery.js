// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const createGalleryContaener = document.querySelector('.gallery');
const createGallery = createGalleryItems(galleryItems);

createGalleryContaener.insertAdjacentHTML('beforeend', createGallery);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
