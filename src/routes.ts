import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResource from './middleware/validateResource';
import { createUserschema } from './schema/user.schema';

function routes(app: Express) {
  app.get('/health', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/api/users', validateResource(createUserschema), createUserHandler);
}

export default routes;
