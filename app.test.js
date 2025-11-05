const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /api/users should return users array', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/users should create user', async () => {
    const newUser = { name: 'Test User', email: 'test@example.com' };
    const response = await request(app).post('/api/users').send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Test User');
  });
});
