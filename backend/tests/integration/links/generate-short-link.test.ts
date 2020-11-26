import { createAgent } from "../utils";

describe("Generate short link", () => {
	test("return status code 200 after sending one link", async () => {
		const result = await createAgent()
			.post("/links/shorten")
			.send({ link: "https://solongthatitisannoyingtotype.test" });

		expect(result.status).toBe(200);
	});
});
