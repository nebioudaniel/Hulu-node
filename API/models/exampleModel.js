

const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true,
    trim: true
  },
  propertyNumber: {
    type: Number,
    required: true,
    min: 0 
  },
  propertyDate: {
    type: Date,
    default: Date.now 
  },
  propertyArray: {
    type: [String], // Array of strings
    default: [] // Default empty array
  }

});


exampleSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

const Example = mongoose.model('Example', exampleSchema);

// Define the schema for the "Product" collection
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String );

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


