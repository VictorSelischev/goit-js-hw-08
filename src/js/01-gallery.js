import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = createGalleryLi(galleryItems);

new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });


// FUNCTION ==================================

function createGalleryLi(array) {
    return array
    .map(item => {
        return `
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    })
    .join('');
}