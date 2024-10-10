async function fetchData() {
    try {
      const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');
      
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log(data);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }
  
  fetchData();
  