const request = require('supertest');
const app = require('../../app');

describe('GET /your-route', () => {
	test('responds with json', async () => {
		const response = await request(app).get('/your-route');
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(expect.any(Object));
	});
});