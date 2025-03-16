import { IController, IResponse } from '../interfaces/IController';

export class ListLeadsController implements IController {
	async handle(): Promise<IResponse> {
		return {
			statusCode: 200,
			body: {
				leads: [
					{ id: '1', name: 'juca' },
					{ id: '2', name: 'Carlito' },
					{ id: '1', name: 'Mateuz' },
				],
			},
		};
	}
}
