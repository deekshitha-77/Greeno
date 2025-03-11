const request = require('supertest');

const app = require('./server'); // Import your Express app

describe('Static Website Tests', () => {
  afterAll((done) => {
    server.close(done); // Close the server after tests to avoid Jest hanging
  });
  
  it('should respond with status 200 for the home page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should serve static files (CSS, JS, images, etc.)', async () => {
    const response = await request(app).get('/css/style.css'); // Assuming you have this file
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/text\/css/);
  });
});