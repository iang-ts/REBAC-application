import express from 'express';
import { makeAuthMiddleware } from '../factories/makeAuthMiddleware';
import { makeListLeadsController } from '../factories/makeListLeadsController';
import { makeSignInController } from '../factories/makeSignInController';
import { makeSignUpController } from '../factories/makeSignUpController';
import { middelwareAdapter } from './adapters/middelwareAdapter';
import { routeAdapter } from './adapters/routeAdapter';
import { makeAuthorizationMiddleware } from '../factories/makeAuthorizationMiddleware';

const app = express();

app.use(express.json());

app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

app.get(
	'/leads',
	middelwareAdapter(makeAuthMiddleware()),
	routeAdapter(makeListLeadsController()),
);

app.post(
	'/leads',
	middelwareAdapter(makeAuthMiddleware()),
	middelwareAdapter(makeAuthorizationMiddleware()),
	async (req, res) => {
		console.log(req.metadata?.account?.role);
		res.json({ create: true });
	},
);

app.listen(3001, () => {
	console.log('server up at http://localhost:3000');
});
