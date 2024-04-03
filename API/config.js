// mongoExample.js

const mongoose = require('mongoose');

// MongoDB connection URI. Replace 'your-mongodb-connection-string' with your actual MongoDB connection string.
const mongoURI = 'mongodb://localhost:27017/your-database-name';

// Additional MongoDB options for the Node.js driver (optional)
// These options are used to configure the MongoDB Node.js driver.
// For more information, refer to the MongoDB Node.js driver documentation.
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Handling MongoDB Connection Errors:
mongoose.connect(mongoURI, mongoOptions)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });

// Defining a Schema and Model:
const ExampleSchema = new mongoose.Schema({
  propertyName: {
    type: String,
    required: true
  }
  // Add more properties here as needed
});

const ExampleModel = mongoose.model('Example', ExampleSchema);

// Inserting Data into MongoDB:
const newData = new ExampleModel({
  propertyName: 'Example Value'
  // Add more properties here as needed
});

newData.save()
  .then(() => console.log('Data saved to MongoDB'))
  .catch(err => console.error('Error saving data to MongoDB:', err));

// Querying Data from MongoDB:
ExampleModel.find({ /* Query conditions */ })
  .then(data => console.log('Data retrieved from MongoDB:', data))
  .catch(err => console.error('Error retrieving data from MongoDB:', err));
