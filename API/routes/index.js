const express = require('express');
const router = express.Router();
const Example = require('../models/exampleModel');

// GET route to fetch all examples
router.get('/', async (req, res) => {
  try {
    const data = await Example.find();
    res.render('index', { data });
  } catch (err) {
    console.error('Error fetching examples:', err);
    res.status(500).send('Server Error');
  }
});

// POST route to create a new example
router.post('/', async (req, res) => {
  try {
    const { propertyName, propertyValue } = req.body;
    
    // Validate request body
    if (!propertyName || !propertyValue) {
      return res.status(400).send('Missing required fields');
    }

    const newExample = new Example({
      propertyName,
      propertyValue
    });

    await newExample.save();
    res.status(201).send('Example created successfully');
  } catch (err) {
    console.error('Error creating example:', err);
    res.status(500).send('Server Error');
  }
});

// GET route to fetch a specific example by ID
router.get('/:id', async (req, res) => {
  try {
    const example = await Example.findById(req.params.id);
    if (!example) {
      return res.status(404).send('Example not found');
    }
    res.render('exampleDetail', { example });
  } catch (err) {
    console.error('Error fetching example:', err);
    res.status(500).send('Server Error');
  }
});

// PUT route to update an existing example
router.put('/:id', async (req, res) => {
  try {
    const { propertyName, propertyValue } = req.body;
    
    // Validate request body
    if (!propertyName || !propertyValue) {
      return res.status(400).send('Missing required fields');
    }

    const example = await Example.findByIdAndUpdate(req.params.id, {
      propertyName,
      propertyValue
    }, { new: true });

    if (!example) {
      return res.status(404).send('Example not found');
    }

    res.status(200).send('Example updated successfully');
  } catch (err) {
    console.error('Error updating example:', err);
    res.status(500).send('Server Error');
  }
});

// DELETE route to delete an existing example
router.delete('/:id', async (req, res) => {
  try {
    const example = await Example.findByIdAndDelete(req.params.id);
    if (!example) {
      return res.status(404).send('Example not found');
    }
    res.status(200).send('Example deleted successfully');
  } catch (err) {
    console.error('Error deleting example:', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
