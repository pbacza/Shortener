import { HashGenerator } from "@links/shorten-link/hash-generator";

describe("Hash Generator", () => {
	it("expect hash has 8 characters", async () => {
		const hash = HashGenerator.execute();

		expect(hash).toHaveLength(8);
	});

	it("expect hash to be alphanumeric", () => {
		const hash = HashGenerator.execute();

		expect(hash).toMatch(/^[a-z0-9]+$/);
	});
});
