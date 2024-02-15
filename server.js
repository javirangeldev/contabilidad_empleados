// server.js
const express = require('express');
const cors = require('cors');
const PartnerService = require('./services/partner.service');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());

const service = new PartnerService();

app.get('/partners', async (req, res) => {
    try {
        const partners = await service.show();
        res.json(partners);
    } catch (err) {
        console.error('Error de red:', err);
        res.status(500).json({ error: 'Error de servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
