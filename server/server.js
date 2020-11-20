const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({ 'message': 'welcome to prodmng' });
});

app.post('/login', (req, res) => {
  console.log(req, res);
  res.json({ 'messaage': 'login' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));