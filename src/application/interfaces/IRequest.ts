export interface IRequest {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	body: Record<string, any>;
	headers: Record<string, string>;
	account?: {
		id: string;
		role: string;
	};
}
