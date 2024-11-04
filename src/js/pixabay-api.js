const API_KEY = '46813700-d54068e337851aebc3c875554'; // Замініть на свій ключ  

export const fetchImages = async (query) => {  
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        return data; // Повертаємо весь об'єкт data
    } catch (error) {  
        console.error('Fetch error:', error);  
        throw error;  
    }  
};

// Приклад використання
const getImages = async (query) => {
    try {
        const imagesData = await fetchImages(query);
        const imageHits = imagesData.hits; // Дістаємо масив зображень
    } catch (error) {
        console.error('Error fetching images:', error);
    }
};

// Виклик функції
getImages('nature'); // Замість 'nature' ви можете вказати будь-який запит