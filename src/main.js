// main.js  
import { fetchImages } from './js/pixabay-api.js';  
import { renderImages, showAlert } from './js/render-functions.js';  
import iziToast from 'izitoast';  
import 'izitoast/dist/css/iziToast.min.css';  
import SimpleLightbox from 'simplelightbox';  
import 'simplelightbox/dist/simple-lightbox.min.css';  

// Ініціалізація бібліотеки SimpleLightbox  
const gallery = new SimpleLightbox('.gallery a');  

// Одержуємо елементи з HTML  
const form = document.querySelector('.js-search');  
const loader = document.querySelector('.loader');  

// Додаємо обробник події для форми  
form.addEventListener('submit', async (event) => {  
event.preventDefault(); // Зупиняємо стандартну обробку форми  

const query = event.target.elements.search.value.trim();  
if (query === '') {  
return showAlert('Please enter a search term!'); // Попередження, якщо поле пусте  
}  

loader.classList.add('show'); // Показуємо індикатор завантаження  
try {  
const images = await fetchImages(query); // Виклик до API для отримання зображень  
renderImages(images); // Рендеримо отримані зображення  
gallery.refresh(); // Оновлюємо SimpleLightbox  
} catch (error) {  
showAlert('Failed to fetch images.'); // Помилка при отриманні зображень  
} finally {  
loader.classList.remove('show'); // Сховуємо індикатор завантаження  
}  
});