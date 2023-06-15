const request = require('supertest');
const server = require('./api');

describe('Index page', () => {
  it('should return the correct status code', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return the correct result', async () => {
    const response = await request(server).get('/');
    expect(response.text).toBe('Welcome to the payment system');
  });

  // Add other tests as needed
});