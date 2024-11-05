import { fetchImages } from './js/pixabay-api';  
import { renderImages } from './js/render-functions';  
import iziToast from 'izitoast';  
import 'izitoast/dist/css/iziToast.min.css';  
import SimpleLightbox from 'simplelightbox';  
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.js-search');  
    const loader = document.querySelector('.loader');  
    const gallery = document.querySelector('.gallery');  

    if (!form) {
        console.error("Форма з класом .js-search не знайдена");
        return;
    }

    // Створюємо екземпляр SimpleLightbox у глобальній області
    let lightbox = new SimpleLightbox('.gallery a');

    form.addEventListener('submit', async (event) => {  
        event.preventDefault(); // Зупиняємо стандартну поведінку  

        const query = event.currentTarget.elements.searchQuery.value.trim();

        if (!query) {  
            iziToast.error({ title: 'Error', message: 'Please enter a search query' });  
            return;  
        }  

        loader.style.display = 'block';  
        gallery.innerHTML = '';   

        try {  
            const data = await fetchImages(query); // Отримуємо дані

            if (!data || !Array.isArray(data.hits)) {
                iziToast.error({ title: 'Error', message: 'Unexpected response format' });
                return;
            }

            if (data.hits.length === 0) {  
                iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });  
            } else {  
                renderImages(data.hits); // Передаємо зображення для рендерингу
                
                // Оновлюємо SimpleLightbox після рендерингу зображень
                lightbox.refresh();
            }  
        } catch (error) {  
            iziToast.error({ title: 'Error', message: error.message });   
        } finally {
            loader.style.display = 'none';  
        }  
    });
});
