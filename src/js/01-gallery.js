// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(galleryItems) {
  const gallery = document.querySelector('.gallery');
  const galleryMarkup = galleryItems
    .map(
      item =>
        `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  //modal
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
    enableKeyboard: true,
  });
}
createGalleryMarkup(galleryItems);
