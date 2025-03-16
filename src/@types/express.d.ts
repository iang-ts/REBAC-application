import type { Role } from '@prisma/client';

declare global {
	namespace Express {
		interface Request {
			metadata?: {
				account?: {
					id: string;
					role: Role;
				};
			};
		}
	}
}

export {};
