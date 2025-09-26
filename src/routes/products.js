const express = require('express');
const products = require('../products');

const router = express.Router();

// GET /products - retorna produtos paginados
router.get('/', (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  page = parseInt(page, 10);
  limit = parseInt(limit, 10);

  // Tratamento de borda: valores inválidos
  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 1) limit = 10;

  const total = products.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = products.slice(start, end);

  res.status(200).json({
    products: paginated,
    total,
    page,
    limit
  });
});

module.exports = router;
