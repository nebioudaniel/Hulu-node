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
}

// Example usage:
// const payloadFetcher = new PayloadDataFetcher();
// payloadFetcher.fetchProducts().then(products => {
//     console.log(products);
// });
