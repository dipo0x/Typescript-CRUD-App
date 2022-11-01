import { Express, Request, Response } from 'express';
import { createPostHandler } from '../controller/post.controller';
import { createPostSchema } from '../schema/post.schema';
import validateRequest from '../middleware/validateRequest';

export default function (app: Express){
	app.post("/post/create", validateRequest(createPostSchema), createPostHandler);
}