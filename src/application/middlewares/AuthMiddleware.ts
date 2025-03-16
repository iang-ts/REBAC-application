import { verify, type JwtPayload } from 'jsonwebtoken';

import {
	IData,
	IMiddleware,
	IRequest,
	IResponse,
} from '../interfaces/IMiddleware';
import { env } from '../config/env';

export class AuthMiddleware implements IMiddleware {
	async handle({ headers }: IRequest): Promise<IResponse | IData> {
		const { authorization } = headers;
		if (!authorization) {
			return {
				statusCode: 401,
				body: {
					error: 'Invalid Access Token',
				},
			};
		}

		try {
			const [bearer, token] = authorization.split(' ');

			if (bearer !== 'Bearer') {
				throw new Error();
			}
			const payload = verify(token, env.jwtSecret) as JwtPayload;

			return {
				data: {
					account: {
						id: payload.sub,
						role: payload.role,
					},
				},
			};
		} catch {
			return {
				statusCode: 401,
				body: {
					error: 'Invalid Access Token',
				},
			};
		}
	}
}
