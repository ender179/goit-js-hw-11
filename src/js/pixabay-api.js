// pixabay-api.js  
const API_KEY = 'YOUR_API_KEY'; // Замініть на свій ключ  

export const fetchImages = async (query) => {  
    const url = `https://pixabay.com/api/?key=${46813700-d54068e337851aebc3c875554}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;  
    
    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error('Network response was not ok');  
        }  
        const data = await response.json();  
        return data.hits; // Повертаємо масив зображень  
    } catch (error) {  
        console.error('Fetch error:', error);  
        throw error;  
    }  
};