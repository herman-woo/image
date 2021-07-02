//ENDPOINT TESTING
import supertest from 'supertest'; //Get Super test for endpoint testing
import app from '../index'; //import express server from app

const request = supertest(app); //create supertest object

//setup a suite for testing
describe('Endpoint Testing for root path', () => {
  it('gets the api root endpoint', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
  it('gets the conversion endpoint', async (done) => {
    const response = await request.get('/convert/?filename=toronto');
    expect(response.status).toBe(200);
    done();
  });
});
