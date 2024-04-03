const axios = require('axios');

class PayloadDataFetcher {
  async fetchProducts() {
    try {
      const response = await axios.get('https://your-payload-cms-api.com/api/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return null;
    }
  }

  async fetchProductById(productId) {
    try {
      const response = await axios.get(`https://your-payload-cms-api.com/api/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      return null;
    }
  }
}

// Example usage:
// const payloadFetcher = new PayloadDataFetcher();
// payloadFetcher.fetchProducts().then(products => {
//   console.log(products);
// });

// Example fetching product by ID
payloadFetcher.fetchProductById(123).then(product => {
  console.log(product);
});
