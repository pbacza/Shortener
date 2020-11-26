import { generateUuidv4 } from "@utils";

export class HashGenerator {
	static execute(): string {
		const uuidv4 = generateUuidv4();
		const hash = uuidv4.substring(0, 8);

		return hash;
	}
}
