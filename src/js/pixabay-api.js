require('dotenv').config(); // Подключаем dotenv, если это Node.js
const API_KEY = process.env.PIXABAY_API_KEY;

export const fetchImages = async (query) => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.hits; // Возвращаем массив изображений
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};