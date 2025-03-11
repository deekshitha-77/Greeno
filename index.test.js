const request = require('supertest');
const express = require('express');

const app = require('./index'); // Import your Express app

describe('Static Website Tests', () => {
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