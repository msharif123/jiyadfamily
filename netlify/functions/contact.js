// netlify/functions/contact.js

require('dotenv').config(); // Load environment variables
const { MongoClient } = require('mongodb');

exports.handler = async (event, context) => {
  try {
    // Check if the body exists
    if (!event.body) {
      throw new Error('Request body is missing');
    }

    // Parse the JSON body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (parseError) {
      throw new Error('Invalid JSON in request body');
    }

    // Ensure the required fields are present
    if (!body.name || !body.email || !body.message) {
      throw new Error('Missing required fields: name, email, or message');
    }

    // Connect to MongoDB
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();

    // Insert the data into MongoDB
    const db = client.db('contacts');
    const collection = db.collection('contacts');
    await collection.insertOne(body);

    // Close the connection
    client.close();

    // Return success message
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Contact saved successfully!' }),
    };
  } catch (error) {
    // Log the error for debugging
    console.error('Error processing the request:', error);

    // Return error message
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error saving contact', error: error.message }),
    };
  }
};
