import { Document, Model } from "mongoose";

export interface LinkPair {
	shortLink: string;
	originalLink: string;
}

export interface LinkPairDocument extends LinkPair, Document {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LinkPairModel extends Model<LinkPairDocument> {}
