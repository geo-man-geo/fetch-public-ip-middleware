const express = require('express');
const axios = require('axios');
const app = express();

const cors = require('cors');

app.use(cors());  // Allow CORS for all origins

app.get('/', async (req, res) => {
  try {
    console.log("Here")
    const response = await axios.get('http://api.ipify.org/?format=json');
    console.log(response)
    res.json(response.data);
  } catch (error) {
    console.log(error)
    res.status(500).send('Error fetching IP address');
  }
});

app.listen(3002, () => console.log('Server running on port 3002'));
