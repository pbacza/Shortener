import Mongoose from "mongoose";
import { Database } from "./types/database.type";

export class MongoDatabase implements Database {
	private database?: Mongoose.Connection;

	constructor(private connectionString: string) {}

	async connect(): Promise<void> {
		if (this.database) {
			return;
		}

		await Mongoose.connect(this.connectionString, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		this.database = Mongoose.connection;

		this.database.once("open", async () => {
			console.log("Connected to the database.");
		});
		this.database.on("error", () => {
			console.log("Error connecting to the database.");
		});
	}

	async disconnect(): Promise<void> {
		if (!this.database) {
			return;
		}

		await Mongoose.disconnect();
	}
}
