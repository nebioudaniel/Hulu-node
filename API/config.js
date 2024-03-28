module.exports = {
  // MongoDB connection URI. Replace 'your-mongodb-connection-string' with your actual MongoDB connection string.
  mongoURI: 'mongodb://localhost:27017/your-database-name',

  // Additional MongoDB options for the Node.js driver (optional)
  // These options are used to configure the MongoDB Node.js driver.
  // For more information, refer to the MongoDB Node.js driver documentation.
  // Set useNewUrlParser to true to use the new URL parser.
  useNewUrlParser: true,
  // Set useUnifiedTopology to true to opt in to using the MongoDB driver's new connection management engine.
  useUnifiedTopology: true,

  // Add more configuration options here as needed for your MongoDB connection.
  // For example, you might want to configure options for authentication, connection pooling, etc.
};
//Handling MongoDB Connection Errors:
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });
//Defining a Schema and Model:
const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true
  },
  // Add more properties here as needed
});

const ExampleModel = mongoose.model('Example', ExampleSchema);

module.exports = ExampleModel;
//
const Example = require('../models/exampleModel');

const newData = new Example({
  propertyName: 'Example Value'
  // Add more properties here as needed
});

newData.save()
  .then(() => console.log('Data saved to MongoDB'))
  .catch(err => console.error('Error saving data to MongoDB:', err));
//Querying Data from MongoDB
const Example = require('../models/exampleModel');

Example.find({ /* Query conditions */ })
  .then(data => console.log('Data retrieved from MongoDB:', data))
  .catch(err => console.error('Error retrieving data from MongoDB:', err));

