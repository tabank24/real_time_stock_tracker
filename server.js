const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/stocks', async (req, res) => {
    try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/quote/AAPL,GOOG,TSLA?apikey=your-api-key');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve stock data' });
    }
});

app.listen(5000, () => console.log('Stock Tracker running on port 5000'));
