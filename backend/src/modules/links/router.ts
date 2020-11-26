import { Router } from "express";
import { GetLinksController } from "./get-links/get-links-controller";
import { LinkRepository } from "./link-repository";
import { ShortenLinkController } from "./shorten-link/shorten-link-controller";

const router = Router();

router.get("/", async (req, res) => {
	const linksRepo = new LinkRepository();
	const linkController = new GetLinksController(linksRepo);
	const allLinks = await linkController.execute();

	res.send({ links: allLinks });
});

router.post("/shorten", async (req, res) => {
	const { link } = req.body;

	const linksRepo = new LinkRepository();
	const linkController = new ShortenLinkController(linksRepo);
	await linkController.execute(link);

	res.sendStatus(200);
});

export default router;
