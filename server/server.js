const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => res.json({ 'message': 'hello world again' }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));