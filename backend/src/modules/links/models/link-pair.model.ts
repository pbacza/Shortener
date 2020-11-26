import { model, Schema } from "mongoose";
import { LinkPairDocument, LinkPairModel } from "./link-pair.types";

const LinkPairSchema = new Schema({
	shortLink: { type: String, required: true, unique: true },
	originalLink: { type: String, required: true },
});

export const linkPairModel = model<LinkPairDocument, LinkPairModel>(
	"linkPair",
	LinkPairSchema
);
