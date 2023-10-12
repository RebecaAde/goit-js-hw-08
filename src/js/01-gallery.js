import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const galleryItem = creategalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItem);

function creategalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class = "galllery__item">
        <a class = "gallery__link" href = "${original}">
        <img class = "gallery__image" src = "${preview}" 
        data-source = "${original}" alt = "${description}"/>
        </a>
        </div>`;
    })
    .join(' ');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
