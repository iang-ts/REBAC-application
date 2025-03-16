import express from 'express';
import { makeSignInController } from '../factories/makeSignInController';
import { makeSignUpController } from '../factories/makeSignUpController';
import { routeAdapter } from './adapters/routeAdapter';
import { makeListLeadsController } from '../factories/makeListLeadsController';
import { middelwareAdapter } from './adapters/middelwareAdapter';
import { makeAuthMiddleware } from '../factories/makeAuthMiddleware';

const app = express();

app.use(express.json());

app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

app.get(
	'/leads',
	middelwareAdapter(makeAuthMiddleware()),
	routeAdapter(makeListLeadsController()),
);

app.listen(3001, () => {
	console.log('server up at http://localhost:3000');
});
