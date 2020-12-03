import { Server } from "@infrastructure";
import router from "@infrastructure/router";
import express, { Application } from "express";

export class ExpressServer implements Server {
	private app?: Application;

	constructor(private port?: number, private corsAddress?: string) {
		this.app = express();
	}

	async start(): Promise<void> {
		if (this.app) {
			await new Promise((resolve) => {
				this.app?.listen(this.port, () => {
					console.log(`Listening at http://localhost:${this.port}`);
					resolve(true);
				});
			});
			this.configure();
		} else {
			console.error("Field server was empty when starting.");
		}
	}

	private configure() {
		if (this.app) {
			this.app.use(express.json());
			this.app.use(express.urlencoded({ extended: true }));
			this.app.use((req, res, next) => {
				res.header("Access-Control-Allow-Origin", this.corsAddress);
				res.header(
					"Access-Control-Allow-Headers",
					"Origin, X-Requested-With, Content-Type, Accept"
				);
				next();
			});
			this.app.use("/", router);
		}
	}

	stop(): void {
		if (this.app) {
			this.app = undefined;
		}
	}
}
