import log from "../logger";
import { Request } from "express";
import { AppDataSource } from "../data-source"
import { getRepository } from "typeorm"
import { Post } from "../entity/Post"
import { findPost, addPost } from '../repositories/post.repository'

export async function createUser(body) {
	const { postExist } = await findPost(body)
    if(postExist == true){
    	throw new Error("You have posted this already");
    }
    else{
    	const post = await addPost(body)
    	return post
    }
}