import { LinkRepositoryInterface } from "@links/types";
import { shortenerDomain } from "@modules/consts";
import { HashGenerator } from "./hash-generator";

export class LinkGenerator {
	constructor(private linkRepository: LinkRepositoryInterface) {}

	public async execute(): Promise<string> {
		const hash = await this.generateNotExistingHash();
		return this.generateShortLink(hash);
	}

	private async generateNotExistingHash(): Promise<string> {
		const hash = HashGenerator.execute();
		const link = this.generateShortLink(hash);
		const result = await this.linkRepository.findByShortLink(link);

		if (result.length) {
			return this.generateNotExistingHash();
		}

		return hash;
	}

	private generateShortLink = (hash: string): string =>
		`${shortenerDomain}${hash}`;
}
