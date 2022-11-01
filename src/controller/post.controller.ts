import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createPost } from '../service/post.service';
import log from '../logger';

export async function createPostHandler(req: Request, res: Response) {
	try {
		const post = await createPost(req.body);
		return res.send(omit(post));
	} catch(e){
		log.error(e);
		return res.status(409).send(e.message);
	}
}