const express = require('express');

// Importa as rotas
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully' });
});

// Rotas de produtos
app.use('/products', productsRouter);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app;