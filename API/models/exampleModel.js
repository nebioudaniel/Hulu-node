
// Import Mongoose
const mongoose = require('mongoose');

// Define the schema for the "Example" collection
const exampleSchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true,
    trim: true // Trim whitespace from the input
  },
  propertyNumber: {
    type: Number,
    required: true,
    min: 0 // Minimum value allowed
  },
  propertyDate: {
    type: Date,
    default: Date.now // Default value is the current date and time
  },
  propertyArray: {
    type: [String], // Array of strings
    default: [] // Default empty array
  }
  // Add more properties here as needed
});

// Create a virtual property based on other properties in the schema
exampleSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// Create and export the model based on the schema
const Example = mongoose.model('Example', exampleSchema);

// Define the schema for the "Product" collection
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String // Added description field
  // Add more fields as needed
});

// Create and export the model based on the schema
const Product = mongoose.model('Product', productSchema);

// Define a method to find products within a specific price range
productSchema.statics.findByPriceRange = function(minPrice, maxPrice, callback) {
  return this.find({ price: { $gte: minPrice, $lte: maxPrice } }, callback);
};

// Define a method to find products by category
productSchema.statics.findByCategory = function(category, callback) {
  return this.find({ category: category }, callback);
};

module.exports = { Example, Product };


