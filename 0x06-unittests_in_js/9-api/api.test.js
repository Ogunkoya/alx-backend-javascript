const request = require('supertest');
const server = require('./api');

describe('Cart page', () => {
  it('should return the correct status code when :id is a number', async () => {
    const response = await request(server).get('/cart/123');
    expect(response.statusCode).toBe(200);
  });

  it('should return the correct status code when :id is NOT a number', async () => {
    const response = await request(server).get('/cart/abc');
    expect(response.statusCode).toBe(404);
  });

  it('should return the correct result when :id is a number', async () => {
    const response = await request(server).get('/cart/123');
    expect(response.text).toBe('Payment methods for cart 123');
  });

  // Add other tests as needed
});