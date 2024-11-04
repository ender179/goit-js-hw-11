try {  
  const data = await fetchImages(query);  
  loader.style.display = 'none';  

  // Перевірте, чи data існує і hits є масивом
  if (data && Array.isArray(data.hits)) {  
    if (data.hits.length === 0) {  
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });  
    } else {  
      renderImages(data.hits);  
    }  
  } else {
    iziToast.error({ title: 'Error', message: 'Unexpected data format received.' });
  }  
} catch (error) {  
  loader.style.display = 'none';  
  console.error('Fetch error:', error);
  iziToast.error({ title: 'Error', message: error.message });   
}
