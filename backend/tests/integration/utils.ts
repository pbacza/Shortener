import request, { SuperTest, Test } from "supertest";

const port = 8080;

export const createAgent = (): SuperTest<Test> =>
	request(`http://backend:${port}`);
