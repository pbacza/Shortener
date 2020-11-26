import { LinkRepositoryInterface } from "@links/types";
import { LinkGenerator } from "./link-generator";

export class ShortenLinkController {
	constructor(private linkRepository: LinkRepositoryInterface) {}

	async execute(link: string): Promise<void> {
		if (!link) return;

		const linkGenerator = new LinkGenerator(this.linkRepository);
		const shortLink = await linkGenerator.execute();

		await this.linkRepository.save({ shortLink, originalLink: link });
	}
}
