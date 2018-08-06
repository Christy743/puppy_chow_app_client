const API_URL = process.env.REACT_APP_API_URL;

const DogFoodService = {
  fetchDogFoods: () => {
    return fetch(`${API_URL}/dogFoods`)
      .then(response => response.json())
  }
}

export default DogFoodService;
