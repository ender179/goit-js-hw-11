import { fetchImages } from './js/pixabay-api'; // Импорт функции для получения изображений из Pixabay  
import { renderImages } from './js/render-functions'; // Импорт функции для отображения изображений  
import iziToast from 'izitoast'; // Импорт библиотеки для уведомлений  
import 'izitoast/dist/css/iziToast.min.css'; // Импорт стилей для iziToast  

// Получение элементов из DOM  
const form = document.querySelector('.js-search'); // Форма поиска  
const loader = document.querySelector('.loader'); // Элемент загрузки  
const gallery = document.querySelector('.gallery'); // Галерея для отображения изображений  

// Добавление обработчика события на отправку формы  
form.addEventListener('submit', async (event) => {  
  event.preventDefault(); // Предотвращаем стандартное поведение формы  

  const query = event.currentTarget.elements.search.value.trim(); // Получение значения из поля поиска  

  if (!query) { // Проверка на пустой запрос  
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });  
    return; // Прерываем выполнение, если запрос пустой  
  }  

  loader.style.display = 'block'; // Отображаем загрузчик  
  gallery.innerHTML = ''; // Очищаем галерею перед новым запросом  

  try {  
    const data = await fetchImages(query); // Получаем данные от API  
    loader.style.display = 'none'; // Скрываем загрузчик  

    if (data.hits.length === 0) { // Проверка наличия результата  
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });  
    } else {  
      renderImages(data.hits); // Рендерим изображения, если есть результаты  
    }  
  } catch (error) { // Обработка ошибок  
    loader.style.display = 'none'; // Скрываем загрузчик  
    iziToast.error({ title: 'Error', message: error.message }); // Выводим сообщение об ошибке  
  }  
});