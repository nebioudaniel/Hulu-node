class PayloadDataFetcher {
  async fetchProducts() {
    try {
      const response = await axios.get('https://your-payload-cms-api.com/api/products');
      if (!response.data.length) throw new Error('No products found');
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
