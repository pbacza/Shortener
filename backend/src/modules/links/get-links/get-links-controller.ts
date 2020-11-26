import { LinkPairDocument } from "@links/models";
import { LinkPairDTO, LinkRepositoryInterface } from "@links/types";

export class GetLinksController {
	constructor(private linkRepo: LinkRepositoryInterface) {}

	async execute(): Promise<LinkPairDTO[]> {
		const linkPairs = await this.linkRepo.getAll();
		return this.mapToDto(linkPairs);
	}

	private mapToDto(linkPairs: LinkPairDocument[]): LinkPairDTO[] {
		return linkPairs.map<LinkPairDTO>((pair) => ({
			shortLink: pair.shortLink,
			originalLink: pair.originalLink,
		}));
	}
}
