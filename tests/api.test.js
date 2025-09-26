const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  describe('GET /', () => {
    test('should return welcome message with endpoints info', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body).toEqual({
        message: 'API is running successfully'
      });
    });
  });

  describe('GET /products', () => {
    test('should return paginated products (default page and limit)', async () => {
      const response = await request(app)
        .get('/products')
        .expect(200);

      expect(Array.isArray(response.body.products)).toBe(true);
      expect(response.body.products.length).toBeGreaterThan(0);
      expect(response.body).toHaveProperty('total');
      expect(response.body).toHaveProperty('page');
      expect(response.body).toHaveProperty('limit');
      expect(response.body.page).toBe(1);
      expect(response.body.limit).toBe(10); // Supondo limit padrão 10
      expect(response.body.total).toBeGreaterThan(0);
    });

    test('should return paginated products with custom page and limit', async () => {
      const response = await request(app)
        .get('/products?page=2&limit=2')
        .expect(200);

      expect(response.body.page).toBe(2);
      expect(response.body.limit).toBe(2);
      expect(Array.isArray(response.body.products)).toBe(true);
    });

    test('should return empty array if page is out of range', async () => {
      const response = await request(app)
        .get('/products?page=999&limit=2')
        .expect(200);

      expect(response.body.products).toEqual([]);
      expect(response.body.page).toBe(999);
    });

    test('should handle invalid page and limit params gracefully', async () => {
      const response = await request(app)
        .get('/products?page=-1&limit=0')
        .expect(200);

      expect(response.body.page).toBe(1); // fallback para 1
      expect(response.body.limit).toBe(10); // fallback para 10
      expect(Array.isArray(response.body.products)).toBe(true);
    });
  });
});