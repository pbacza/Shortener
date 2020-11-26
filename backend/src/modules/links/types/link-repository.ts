import { LinkPairDocument, LinkPair } from "@links/models";

export interface LinkRepositoryInterface {
	findByShortLink(link: string): Promise<LinkPairDocument[]>;
	getAll(): Promise<LinkPairDocument[]>;
	save(linkPair: LinkPair): Promise<LinkPairDocument>;
}
