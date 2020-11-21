const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 'message': 'welcome to prodmng' });
});

app.post('/contact', (req, res) => {
  console.log(req.body);
  const data = req.body;
  const name = data['name'];
  const email = data['email'];
  const message = data['message'];
  console.log(name, email, message);
  res.json(data);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));