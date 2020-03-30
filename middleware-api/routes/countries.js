const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET countries listing. */
router.get('/all', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
});

/* GET unique country. */
router.get('/country', async (req, res) => {
  try {
    const { name } = req.query;
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
});

/* GET countries by code. */
router.get('/codes', async (req, res) => {
  try {
    const { codes } = req.query;
    const response = await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${codes}`);
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
