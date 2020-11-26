import { LinkPair, LinkPairDocument, linkPairModel } from "./models";
import { LinkRepositoryInterface } from "./types";

export class LinkRepository implements LinkRepositoryInterface {
	async findByShortLink(link: string): Promise<LinkPairDocument[]> {
		return await linkPairModel.find({ shortLink: link });
	}

	async getAll(): Promise<LinkPairDocument[]> {
		return await linkPairModel.find();
	}

	async save(linkPair: LinkPair): Promise<LinkPairDocument> {
		return await linkPairModel.create(linkPair);
	}
}
