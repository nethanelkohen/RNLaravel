const URI = 'http://localhost:8000';

export default {
  async fetchCoins() {
    try {
      let response = await fetch(URI + '/api/products');
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  }
};
