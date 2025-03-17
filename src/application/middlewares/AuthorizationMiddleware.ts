import { IData, IMiddleware, IResponse } from '../interfaces/IMiddleware';
import { IRequest } from '../interfaces/IRequest';

export class AuthorizationMiddleware implements IMiddleware {
	constructor(private readonly allowedRoles: string[]) {}

	async handle({ account }: IRequest): Promise<IResponse | IData> {
		if (!account) {
			return {
				statusCode: 403,
				body: null,
			};
		}

		if (!this.allowedRoles.includes(account.role)) {
			return {
				statusCode: 403,
				body: null,
			};
		}

		return {
			data: {},
		};
	}
}
