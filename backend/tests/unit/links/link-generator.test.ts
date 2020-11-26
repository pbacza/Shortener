import { mocked } from "ts-jest/utils";
import { LinkRepository } from "@links/link-repository";
import { LinkGenerator } from "@links/shorten-link/link-generator";

jest.mock("@links/link-repository", () => ({
	LinkRepository: jest.fn().mockImplementation(() => ({
		findByShortLink: (link: string): Promise<[]> =>
			new Promise((resolve) => {
				resolve([]);
			}),
	})),
}));

describe("Link Generator", () => {
	const mockedLinkRepository = mocked(LinkRepository, true);

	beforeEach(() => {
		mockedLinkRepository.mockClear();
	});

	it("generate link has 'pbid.io' domain", async () => {
		const linkRepository = new LinkRepository();
		const linkGenerator = new LinkGenerator(linkRepository);

		const link = await linkGenerator.execute();

		expect(link).toContain("pbid.io");
	});
});
