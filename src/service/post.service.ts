import log from "../logger";
import { Request } from "express";
import { AppDataSource } from "../data-source"
import { getRepository } from "typeorm"
import { Post } from "../entity/Post"
import { findPost, addPost, allPosts } from '../repositories/post.repository'

export async function createPost(body) {
	const { postExist } = await findPost(body)
    if(postExist == true){
    	throw new Error("You have posted this already");
    }
    else{
    	const post = await addPost(body)
    	return post
    }
}

export async function allPost() {
	const post = await allPosts()
    return post
}