const mongoose = require('mongoose');

// Define the schema for your MongoDB collection
const ExampleSchema = new mongoose.Schema({
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
ExampleSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// Create and export the model based on the schema
module.exports = mongoose.model('Example', ExampleSchema);
////Data Model: We'll define the Mongoose schema for products in the models/exampleModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Product', productSchema);
