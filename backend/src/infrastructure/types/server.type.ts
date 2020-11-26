export interface Server {
	start(): Promise<void>;
	stop(): void;
}
