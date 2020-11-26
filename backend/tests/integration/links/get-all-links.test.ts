import { createAgent } from "../utils";

describe("Get All Links", () => {
	test("returns links pair as expected", async () => {
		await createAgent()
			.post("/links/shorten")
			.send({ link: "https://veryinterestingsite.test" })
			.expect(200);

		const result = await createAgent().get("/links").expect(200);

		const { links } = result.body;

		const lastLink = links[links.length - 1];

		expect(lastLink.shortLink).toContain("https://pbid.io/");
		expect(lastLink.originalLink).toBe("https://veryinterestingsite.test");
	});
});
