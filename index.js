const express = require('express');
const path = require('path');
const app = express();
const Produto = require('./models/Produto.js');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get('/api/produtos', async (req, res) => {
  try {
      console.log('passo 1');
      const produtos = await Produto.findAll();
      console.log('passo 2');
      res.json({ produtos });
  } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


