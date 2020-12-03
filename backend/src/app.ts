import { config as loadEnvironmentalVariables } from "dotenv-flow";

import {
	Server,
	ExpressServer,
	Database,
	MongoDatabase,
} from "@infrastructure";

export class Application {
	private server?: Server;
	private database?: Database;

	constructor() {
		loadEnvironmentalVariables();
		const port = Number(process.env.PORT) || 8080;
		const connectionString = process.env.CONNECTION_STRING || "";
		const feAddress = process.env.FE_ADDRESS || "";

		this.server = new ExpressServer(port, feAddress);
		this.database = new MongoDatabase(connectionString);
	}

	async start(): Promise<void> {
		await this.database?.connect();
		await this.server?.start();
	}

	async stop(): Promise<void> {
		if (this.server) {
			this.server.stop();
			this.server = undefined;
			await this.database?.disconnect();
			this.database = undefined;
		}
	}
}
