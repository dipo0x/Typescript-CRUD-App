import { Express, Request, Response } from 'express';
import { createUserHandler } from '../controller/user.controller';
import { createUserSchema } from '../schema/user.schema';
import validateRequest from '../middleware/validateRequest';

export default function (app: Express){
	app.post("/signup", validateRequest(createUserSchema), createUserHandler);
}