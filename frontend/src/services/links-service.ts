import { ApiResult, RestClient } from "./rest-client";

export interface LinkPair {
  shortLink: string;
  originalLink: string;
}

export interface LinksResponse {
  links: LinkPair[];
}

export class LinksService {
  private restClient: RestClient;

  constructor(address: string) {
    this.restClient = new RestClient(address);
  }

  async getAll(): Promise<ApiResult<LinksResponse>> {
    return await this.restClient.get<LinksResponse>("/links");
  }

  async shortenLink(link: string): Promise<void> {
    await this.restClient.post("/links/shorten", { link: link });
  }
}
