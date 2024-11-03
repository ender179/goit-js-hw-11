// render-functions.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const renderImages = (images) => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Очищаємо галерею перед новим рендерингом

    if (images.length === 0) {
        showAlert('Sorry, there are no images matching your search query. Please try again!');
        return;
    }

    const markup = images.map(image => `
        <a href="${image.largeImageURL}">
            <div class="gallery-item">
                <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                <div class="info">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                </div>
            </div>
        </a>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
};

export const showAlert = (message) => {
    iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
    });
};