import { AuthorizationMiddleware } from '../application/middlewares/AuthorizationMiddleware';

export function makeAuthorizationMiddleware() {
	return new AuthorizationMiddleware([]);
}
